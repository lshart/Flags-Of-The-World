#pragma strict
import System.Collections.Generic;
import System.Collections.ArrayList;
//import Mathf;
//import UnityEngine.UI;
var mapFlag : Texture2D[] = [];
//static var placedFlag : ArrayList;
//static var place : int;
//static var currentFlag;
static var MapText : Texture2D[] = [];

//int currentFlag;

 
function Start () 
{
	MapText = mapFlag.Clone();
    
}
static function updateMap()
{
var num = AfricaFlagManager.currentFlag;
    GameObject.Find("MapUI").GetComponent.<GUITexture>().texture = MapText[num];
}

 
function Update () {
 
}