#pragma strict

var kssiLogoBG : Texture2D;
var nipaLogoBG : Texture2D;
var blackBG : Texture2D;

var fadeTime : float;
var controlTime : float;
var changeLogo : int;

function Start () {
	fadeTime = 1.0;
	controlTime = 0.0;
	changeLogo = 1;
}

function FixedUpdate () {
	controlTime += Time.deltaTime;
	if(controlTime > 0 && controlTime < 3)
	{
		fadeTime -= Time.deltaTime*0.5;
	}
	else if(controlTime >= 3 && controlTime < 6)
	{
		fadeTime += Time.deltaTime*0.5;
	}
	else
	{
		controlTime = 0.0;
		changeLogo++;
	}
	
}

function OnGUI()
{
	if(changeLogo == 1)
	{
		GUI.DrawTexture (Rect (0,0,1680,1050), kssiLogoBG , ScaleMode.StretchToFill, true, 0 );
	}
	else if(changeLogo == 2)
	{
		GUI.DrawTexture (Rect (0,0,1680,1050), nipaLogoBG, ScaleMode.StretchToFill, true, 0 );
	}	
	
	GUI.color.a = fadeTime;
	GUI.DrawTexture (Rect (0,0,1680,1050), blackBG, ScaleMode.StretchToFill, true, 0 );
}