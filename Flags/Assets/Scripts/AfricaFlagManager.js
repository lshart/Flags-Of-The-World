#pragma strict
import System.Collections.Generic;
import System.Collections.ArrayList;


//import Mathf;
//import UnityEngine.UI;
var hudFlag : Texture2D[] = [];
var UI : Texture2D;
static var placedFlag : ArrayList;
static var place : int;
static var currentFlag : int;
static var FlagText : Texture2D[] = [];
static var Miss : int;
static var CNames : String[] = [] ;

 
function Start () 
{
	CNames =  ["The United States" , "Mexico" , "Canada" , "Argentina", "The Bahamas", "Belize", "Bolivia", "Brazil", 
	"Chile", "Colombia", "Costa Rica", "Cuba", "Dominican Republic", "Ecuador", "El Salvador", "Guatemala", "Guyana", 
	"Haiti", "Honduras","Jamaica", "Nicaragua", "Paraguay", "Peru", "Suriname", "Trinidad And Tobago", "Uruguay", "Venezuela",
	"Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Cambodia", "China", "Cyprus", "East Timor", "Egypt", "Georgia",
	"Hong Kong", "India", "Indonesia", "Iran", "Iraq", "Isreal", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos",
	"Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Philippines", "Qatar",
	"Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikstan", "Thailand", "Turkey", "Turkmenistan",
	"United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen","Egypt"
	
,"Algeria"
,"Angola"
,"Burkina Faso"
,"Burundi"
,"Cameroon"
,"Central African Republic"
,"Chad"
,"Comoros"
,"Democratic Republic of the Congo"
,"Djibouti"
,"Equatorial Guinea"
,"Eritrea"
,"Ethiopia"
,"Gabon"
,"Gambia"
,"Ghana"
,"Guinea"
,"Guinea-Bissau"
,"Ivory Coast"
,"Kenya"
,"Liberia"
,"Libya"
,"Madagascar"
,"Malawi"
,"Mali"
,"Mauritania"
,"Mauritius"
,"Morocco"
,"Mozambique"
,"Niger"
,"Nigeria"
,"Republic of the Congo"
,"Rwanda"
,"Réunion"
,"São Tomé and Príncipe"
,"Senegal"
,"Seychelles"
,"Sierra Leone"
,"Somalia"
,"South Sudan"
,"Sudan"
,"Tanzania"
,"Togo"
,"Tunisia"
,"Uganda"
,"Western Sahara"
,"Zambia"
,"Zimbabwe"
,"South Africa"
,"Botswana"
,"Namibia"
,"Lesotho"
,"Swaziland"
,"Benin"  //Europe
,"Albania"
,"Andorra"
,"Austria"
,"Belarus"
,"Belgium"
,"Bosnia And Herzegovina"
,"Bulgaria"
,"Croatia"
,"Czech Republic"
,"Denmark"
,"Estonia"
,"Finland"
,"France"
,"Germany"
,"Greece"
,"Greenland"
,"Hungary"
,"Iceland"
,"Ireland"
,"Italy"
,"Kosovo"
,"Latvia"
,"Lithuania"
,"Luxembourg"
,"Macedonia"
,"Malta"
,"Moldova"
,"Montenegro"
,"Netherlands"
,"Norway"
,"Poland"
,"Portugal"
,"Romania"
,"Russia"
,"San Marino"
,"Serbia"
,"Slovakia"
,"Slovenia"
,"Spain"
,"Sweden"
,"Switzerland"
,"Ukraine"
,"United Kingdom"
,"Vatican City"
];

	 Miss = 0;
	 
    var RandonNumber = Mathf.Floor(Random.Range(76, 130));
    GameObject.Find("FlagUI").GetComponent.<GUITexture>().texture = hudFlag[RandonNumber];
  
   
   	currentFlag = RandonNumber; 
   	print("Current Flag ID: " +  RandonNumber);
   	FlagText =  hudFlag.Clone();
   	placedFlag = new ArrayList();
  	GameObject.Find("CountryName").GetComponent.<GUIText>().text =  CNames[currentFlag];
  	AfricaMusic.Play();

  	AfricaMapManager.updateMap();  
   	
   //	CNames  = new ArrayList();
   	

  // CNames =  ["The United States" , "Mexico" , "Canada" , "Argentina", "The Bahamas", "Belize", "Bolivia", "Brazil", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominican Republic", "Ecuador", "El Salvador", "Guatemala", "Guyana", "Haiti", "Honduras","Jamaica", "Nicaragua", "Paraguay", "Peru", "Suriname", "Trinidad And Tobago", "Uruguay", "Venezuela"];
 //  CNames[0] = "The United States";

   	
   	
}

static function PlacedFlag () 
{
	placedFlag.Add(currentFlag);
	var i : int;
	for(i = 0 ; i < 1 ; i++)
	{
		print(placedFlag[i]);
	}
	
   var RandomNumber : int = Mathf.Floor(Random.Range(76, 130));
   print("Attempt at random number "  + RandomNumber);
   if(placedFlag.Count == 54)
   {
   	GameObject.Find("CompleteMessage").GetComponent.<GUIText>().text = "Congratulations!!! " + "\nCorrect Placements: " + 54 +"\n Incorrect Placement Attempts: " + Miss;
   }
   else
   {
	  while(placedFlag.Contains(RandomNumber) )
	   {
	   		RandomNumber = Mathf.Floor(Random.Range(76, 130));
	   		print("Attempt at random number "  + RandomNumber);
	   }
	   
	   GameObject.Find("FlagUI").GetComponent.<GUITexture>().texture = FlagText[RandomNumber];
	  
	   	currentFlag = RandomNumber; 
	   	
	   	AfricaMusic.Play();
	   	
	   	print("Current Flag ID: " +  RandomNumber);
	    GameObject.Find("CountryName").GetComponent.<GUIText>().text =  CNames[currentFlag];
	   	AfricaMapManager.updateMap();
	}
}
 
function Update () {
 
}

@script RequireComponent(AudioSource)