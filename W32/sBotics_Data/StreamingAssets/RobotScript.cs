using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System.Threading;
using System.IO;
using System;
using Bot;
namespace RuntimeCSharpCompiler
{
public class TestLoadScript : MonoBehaviour 
{
private GameObject robo;
private bool firstStart=false;
private BotController bc;
private string nome;Thread t1;void Start(){nome = GameObject.Find("Robos").GetComponent<EscolherModelo>().nome;robo = GameObject.Find(nome);bc = robo.GetComponent<BotController>();bc.running = true;t1 = new Thread(() => {bc.clearLCD();
/*
* W-Educ
* http://weduc.natalnet.br
* (C) Copyright 2014-2020
* */

string l1 =  "" ;

string l2 =  "" ;

string l3 =  "" ;

string l4 =  "" ;

string l5 =  "" ;

string l6 =  "" ;

string sensor =  "" ;

double kp = 12.5;

double kd = 10;

double ki = 0;

double erro = 0;

double flag = 1;

double corte = 50;

double velocidademotor = 0;

double velocidadenormal = 75;

double ultimoerro = 0;

double derro = 0;

Action LerSensorLinha = () => {

if (bc.lightness((int)(1-1)) > corte) {
    l1 = 1.ToString();
}

else {
    l1 = 0.ToString();
}

if (bc.lightness((int)(2-1)) > corte) {
    l2 = 1.ToString();
}

else {
    l2 = 0.ToString();
}

if (bc.lightness((int)(3-1)) > corte) {
    l3 = 1.ToString();
}

else {
    l3 = 0.ToString();
}

if (bc.lightness((int)(4-1)) > corte) {
    l4 = 1.ToString();
}

else {
    l4 = 0.ToString();
}

if (bc.lightness((int)(5-1)) > corte) {
    l5 = 1.ToString();
}

else {
    l5 = 0.ToString();
}

sensor = (l1 + " " + (l2 + " " + (l3 + " " + (l4 + " " + l5))));bc.printLCD(1, sensor);


};

Action TratarErro = () => {

bc.printLCD(3, bc.lightness((int)(5-1)).ToString());
if (sensor ==  "0 1 1 1 1" ) {
    erro = 4;
}

else if (sensor ==  "0 0 1 1 1" ) {
    erro = 3;
}

else if (sensor ==  "1 0 1 1 1" ) {
    erro = 2;
}

else if (sensor ==  "1 0 0 1 1" ) {
    erro = 1;
}

else if (sensor ==  "1 1 0 1 1" ) {
    erro = 0;
}

else if (sensor ==  "1 1 0 0 1" ) {
    erro = (-1);
}

else if (sensor ==  "1 1 1 0 1" ) {
    erro = (-2);
}

else if (sensor ==  "1 1 1 0 0" ) {
    erro = (-3);
}

else if (sensor ==  "1 1 1 1 0" ) {
    erro = (-4);
}



};

Action SeguirLinha = () => {

LerSensorLinha();

TratarErro();

derro = (erro - ultimoerro);ultimoerro = erro;if (erro > 0) {
    velocidademotor = (velocidadenormal + (erro * kp));velocidademotor = (velocidademotor - (derro * kd));bc.onTF((float)-(velocidademotor), (float)(velocidademotor));

}

else if (erro == 0) {
    velocidademotor = velocidadenormal;bc.onTF((float)velocidademotor, (float)velocidademotor);

}

else if (erro < 0) {
    velocidademotor = (velocidadenormal + (-(erro * kp)));velocidademotor = (velocidademotor - (derro * kd));bc.onTF((float)(velocidademotor), (float)-(velocidademotor));

}



};

int forIteratorLevelN = 0;        
int[] forIteratorLevel;
forIteratorLevel = new int[10];

while (true) {
    if (flag == 1) {
    SeguirLinha();


}


}




bc.onTF(0f, 0f);}); if (!firstStart){ t1.Start(); firstStart=true;}} public void Restart(){t1.Abort(); t1.Start();} private void killTheThread() {if(bc == null) Start();if (bc.restart){Restart();bc.restart=false;} else if (bc.running == false) { t1.Abort(); bc.onTF(0f, 0f); Destroy(this); }}void Update(){ killTheThread(); } } }
