#pragma strict

var smooth : float = 2.0;
var DoorOpenAngle : float = 90.0;
var DoorCloseAngle : float = 0.0;
var open : boolean;
var enter : boolean;

var onOffButton : KeyCode = KeyCode.E;

var missions : MissionStage1;
var cmp : GameObject;

function Start () {
	cmp = gameObject.Find("complete");
  	missions = cmp.transform.gameObject.GetComponent("MissionStage1");
}

function Update () {
	if(open == true)
	{
		var target = Quaternion.Euler(0, DoorOpenAngle, 0);
		transform.localRotation = Quaternion.Slerp(transform.localRotation, target, Time.deltaTime*smooth );
	}
	
	if(open == false)
	{
		var target1 = Quaternion.Euler(0, DoorCloseAngle, 0);
		transform.localRotation = Quaternion.Slerp(transform.localRotation, target1, Time.deltaTime*smooth );
	}
	
	if(enter == true && missions.jacketEvent)
	{
		if(Input.GetKeyDown(onOffButton))
		{
			(open) = !(open);
		}
	}
}

function OnTriggerEnter(other : Collider)
{
	if(other.gameObject.tag == "Player")
	{
		(enter) = true;	
		if(!missions.jacketEvent)
		{
			print("alram test");
		}
	}
}

function OnTriggerExit(other : Collider)
{
	if(other.gameObject.tag == "Player")
	{
		(enter) = false;
	}
}