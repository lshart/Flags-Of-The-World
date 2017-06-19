#pragma strict

var arrow : GameObject;


function Start () {

}

function Update () {
	if(Input.GetKey("z") && GameObject.Find("arrow02(Clone)")== null)
	{
		var base  : GameObject = GameObject.FindGameObjectsWithTag (EuropeFlagManager.currentFlag.ToString())[0];
		var position = base.transform.position;
		var obj = Instantiate(arrow, position , Quaternion.identity);
		obj.transform.Rotate(0,0,90);
		obj.transform.Translate(25.37206,-3.333774,0);
	
	
	
	}
}