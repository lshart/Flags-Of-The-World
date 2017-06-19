#pragma strict

var beep : AudioClip;
var menuSkin : GUISkin;
var menuArea : Rect;
private var menuAreaNormalized : Rect;
var playButton : Rect;
var instructionsButton : Rect;
var quitButton : Rect;
var instructions : Rect;
private var menuPage : String = "main";


function Start ()
{	
	menuAreaNormalized = Rect(menuArea.x * Screen.width - (menuArea.width * 0.5f), 
	menuArea.y * Screen.height - (menuArea.height * 0.5f), 
	menuArea.width, menuArea.height);
	
}

function OnGUI()
{
	GUI.skin = menuSkin;
	GUI.BeginGroup (menuAreaNormalized);
	if(menuPage == "main")
	{
		if(GUI.Button(Rect(playButton),"Play"))
		{
			//change the string below to match the name of your main island scene
			GetComponent.<AudioSource>().PlayOneShot(beep);
			menuPage = "play";
		}
		
		if(GUI.Button(Rect(instructionsButton), "Instructions"))
		{
			GetComponent.<AudioSource>().PlayOneShot(beep);
			menuPage = "instructions";
		}
		
		if(GUI.Button(Rect(quitButton), "Quit"))
		{
			ButtonAction("quit");
		}
		if(GUI.Button(Rect(quitButton), "Credit"))
		{
			GetComponent.<AudioSource>().PlayOneShot(beep);
			menuPage = "Credit";
		}
	} 
	
	GUI.EndGroup();
}

function ButtonAction(levelName : String)
{	
	GetComponent.<AudioSource>().PlayOneShot(beep);
	yield new WaitForSeconds(0.35f);
	if(levelName != "quit")
	{
		Application.LoadLevel(levelName);
	} else
	{
		Application.Quit();
		Debug.Log("Have Quit");
	}
}

@script RequireComponent(AudioSource)