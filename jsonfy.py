import requests
import urllib
import json
datag = {
    "data": []
}
token = {"Authorization": "token f2f2a73729ad7256f8f419fce97c70e08ce139fb "}
def WalkTree(data):
    for item in data:
        try:
            if item["type"] == "file":
                
                path_parsed = urllib.parse.urlencode({"data":item["path"]})[5:]
                obj = {
                    "name" : item["name"],
                    "path":item["path"],
                    "type" : "file",
                    "download" : item["download_url"],
                    "size" : item["size"],
                    "last_updated_at" : requests.get("https://api.github.com/repos/Txiag/sBotics/commits?path="+path_parsed, headers=token).json()[0]["commit"]["author"]["date"]
                }
                datag["data"].append(obj)
            elif item["type"] == "dir":
                req2 = requests.get
                req2 = requests.get(item["_links"]["self"], headers=token).json()
                WalkTree(req2)
        except:
            jsonr = json.dumps(data)
            jsonx = open("log", 'a')
            jsonx.write(jsonr)
            jsonx.close()
            exit()
order = ["Linux AMD64.json", "Linux i386.json", "W32.json", "W64.json", "mac.json"]

req = requests.get("https://api.github.com/repos/Txiag/sBotics/contents/", headers=token)
req = req.json()
cont = 0
for item in req:
    if item["name"] == "jsonfy.py":
        break
    if item["name"] not in order:
        req2 = requests.get(item["_links"]["self"]).json()
        print('-----Iniciando Busca do '+order[cont]+"-----")
        WalkTree(req2)
        print('-----Iniciando escrita do '+order[cont]+"-----")
        jsonr = json.dumps(datag)
        jsonx = open(order[cont], 'w')
        jsonx.write(jsonr)
        jsonx.close()
        datag = {
        "data": []
        }
        cont += 1