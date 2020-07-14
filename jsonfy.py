import requests
import urllib
import json
datag = {
        "version" : "1",
        "download_link":"http://weduc.natalnet.br/sbotics",
    "data": []
}
token = {"Authorization": "token 6d265874178abfc6754d76baa2f969766e328912 "}
def WalkTree(data):
    for item in data:
        try:
            if item["type"] == "file":
                path_parsed = urllib.parse.urlencode({"data":item["path"]})[5:]
                path_normalized = item["path"]
                path_normalized = path_normalized[path_normalized.find('/')+1:]
                path_normalized = path_normalized[0:len(path_normalized)-len(item["name"])]
                if item["name"][::-1][:4][::-1] == ".zip":
                    fformat = "zip"
                    print("entrou")
                    print(item["name"])
                else:
                    fformat = "simple"
                obj = {
                    "name" : item["name"],
                    "path":path_normalized,
                    "type" : "file",
                    "download" : item["download_url"],
                    "size" : item["size"],
                    "last_updated_at" : requests.get("https://api.github.com/repos/Txiag/sBotics/commits?path="+path_parsed, headers=token).json()[0]["commit"]["author"]["date"],
                    "format" : fformat
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
order = ["Linux AMD64.json", "Linux i386.json", "W32.json", "W64.json", "mac.json", "jsonfy.py"]

req = requests.get("https://api.github.com/repos/Txiag/sBotics/contents/", headers=token)
req = req.json()
cont = 0
for item in req:
    if cont == 5:
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
        "version" : "1",
        "download_link":"http://weduc.natalnet.br/sbotics",
        "data": [],
        
        }
        cont += 1