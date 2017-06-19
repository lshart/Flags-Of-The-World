#pragma strict

var Music : AudioClip[];
var Target: GameObject;
static var target : GameObject;
static var music : AudioClip[] = [];

function Start () 
{
	music = Music.Clone();
	target = Target;
}

static function Play()
{
	target.GetComponent.<AudioSource>().Stop();
	target.GetComponent.<AudioSource>().PlayOneShot(music[FlagManager.currentFlag]);
}


@script RequireComponent(AudioSource)