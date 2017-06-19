#pragma strict

var levelToLoad : String;
var levelToLoad1 : String;
var levelToLoad2 : String;
var levelToLoad3 : String;
var levelToLoad4 : String;
var levelToLoad5 : String;
var instructions : GameObject;
var instructionsPanel : GameObject;
var instructionsText : String;
var creditPanel : GameObject;
var playPanel: GameObject;
var Panel: GameObject;
var MenuPanel: GameObject;
function LoadLevel() 
{
	Application.LoadLevel(levelToLoad);
}
function LoadLevel1() 
{
	Application.LoadLevel(levelToLoad1);
}
function LoadLevel2() 
{
	Application.LoadLevel(levelToLoad2);
}
function LoadLevel3() 
{
	Application.LoadLevel(levelToLoad3);
}
function LoadLevel4() 
{
	Application.LoadLevel(levelToLoad4);
}
function LoadLevel5() 
{
	Application.LoadLevel(levelToLoad5);
}

function QuitApp() 
{
	Application.Quit();
}

function ShowCredit()
{
	creditPanel.SetActive(true);
	HidePanel();
}
function ShowMainMenu()
{
	MenuPanel.SetActive(true);
}
function HideMainMenu()
{
MenuPanel.SetActive(false);
}
function ShowIntructions()
{
	instructionsPanel.SetActive(true);
	var myText = instructions.GetComponent(UI.Text);
	myText.text = instructionsText;
	HidePanel();
}
function ShowPlayPanel()
{
	playPanel.SetActive(true);
	HidePanel();
}
function HidePlayPanel()
{
	playPanel.SetActive(false);
	Panel.SetActive(true);
}
function HideInstructions()
{
	instructionsPanel.SetActive(false);
	Panel.SetActive(true);
}
function HideCredit()
{
	creditPanel.SetActive(false);
	Panel.SetActive(true);
}
function HidePanel()
{
	Panel.SetActive(false);
}