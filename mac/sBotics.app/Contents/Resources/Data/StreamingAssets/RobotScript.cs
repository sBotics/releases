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

int forIteratorLevelN = 0;        
int[] forIteratorLevel;
forIteratorLevel = new int[10];

bc.onTF(100f, 100f);
bc.wait(4000);



bc.onTF(0f, 0f);}); if (!firstStart){ t1.Start(); firstStart=true;}} public void Restart(){t1.Abort(); t1.Start();} private void killTheThread() {if(bc == null) Start();if (bc.restart){Restart();bc.restart=false;} else if (bc.running == false) { t1.Abort(); bc.onTF(0f, 0f); Destroy(this); }}void Update(){ killTheThread(); } } }
