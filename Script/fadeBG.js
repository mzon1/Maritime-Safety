#pragma strict

var fadeTime : float;
var bgblack : Texture2D;

var fadeOn : boolean;

function Start () {
	fadeTime = 0;
	fadeOn = true;
}

function FixedUpdate () {
	if(fadeOn)
	{
		fadeTime += Time.deltaTime/3.0;
	}
	else
	{
		fadeTime -= Time.deltaTime/3.0;
	}
	if(fadeTime > 1.0)
	{
		fadeOn = !fadeOn;
	}
}

function OnGUI()
{
	GUI.color.a = fadeTime;
	GUI.DrawTexture (Rect ( 0 , 0, 1680, 1050), bgblack, ScaleMode.StretchToFill, true, 0  );
}