#pragma strict

var Base : GameObject;
var Flag : GameObject;
var Target : GameObject;
var ID : int;
var Failsound : AudioClip;
var SuccessSound : AudioClip;
var Message : GameObject;
var PressE : GameObject;


function Awake()
{
	//print("HI");
	Base.tag = ID.ToString();
	//print("Tag: " + Base.tag);
	
}

function OnTriggerEnter(obj : Collider)
{
	PressE.GetComponent.<GUIText>().text = "Press the 'e' key to place your flag";
}
function OnTriggerExit(obj : Collider)
{
	PressE.GetComponent.<GUIText>().text = "";
}



function OnTriggerStay(obj : Collider)
{
	var message : String;
	
	if(AsiaFlagManager.currentFlag == ID && Input.GetKey("e"))
	{
		var i : int;
		var arrows = GameObject.Find("arrow02(Clone)");
	
		
		Destroy(arrows);
		
		
		PressE.GetComponent.<GUIText>().text = "";
		
		
		var extraMessages : GameObject[] = GameObject.FindGameObjectsWithTag ("message");
		
		for( i = 0; i < extraMessages.Length ; i++)
		{
			Destroy(extraMessages[i]);
		}
		
		Message.GetComponent.<GUIText>().text = "You correctly placed " + AsiaFlagManager.CNames[ID] +"!";
		Destroy(Instantiate(Message),3);
	
		
		
		Base.transform.Translate(16.4145,15.125,6.38527);
		var position = Base.transform.position;
		Destroy(Base);
		Instantiate(Flag, position , Quaternion.identity);
		
	
		Target.GetComponent.<AudioSource>().PlayOneShot(SuccessSound);
		
		
		
		AsiaFlagManager.PlacedFlag();
	}
	else
	if(Input.GetKey("e"))
	{
		message = "Current Flag: " + AsiaFlagManager.currentFlag + "!= ID: " + ID;
		extraMessages= GameObject.FindGameObjectsWithTag ("message");
	
		for( i = 0; i < extraMessages.Length ; i++)
		{
			Destroy(extraMessages[i]);
		}
		Message.GetComponent.<GUIText>().text = "Incorrect, that country is " + AsiaFlagManager.CNames[ID] +".";
		Destroy(Instantiate(Message),3);
	
		AsiaFlagManager.Miss ++;
	//	Target.audio.PlayOneShot(Failsound);
	}
	
}

@script RequireComponent(AudioSource)