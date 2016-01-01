#pragma strict

var flashlight : Light; 

var onOffButton : KeyCode = KeyCode.F;

function Start () {
	flashlight = GetComponent(Light);
}

function Update () {
	if(Input.GetKeyDown(onOffButton))
	{
		flashlight.enabled = !flashlight.enabled;
	}
}