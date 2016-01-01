#pragma strict

var x : float;
var mLerpTimer : float;

var BGWindow : Texture2D;
var loadingWindow : Texture2D;
var loadingbar : Texture2D;

var AnimCurve : AnimationCurve;
var loadingSpeed : float;

function Start () {
	loadingSpeed = 0.05;
	x = 0;
	mLerpTimer = 0;
}

function Update () {
	if(mLerpTimer < 1.0f)
	{
		var curve1 : float = AnimCurve.Evaluate(mLerpTimer);
		x = x + (1680 - x) * curve1;
		print("?");
		
		mLerpTimer += Time.deltaTime * loadingSpeed;
	}
}

function OnGUI()
{
	GUI.Label (Rect ( 0, 0, 1680, 1050), BGWindow );
	GUI.Label (Rect ( 0, 700, 300, 100), loadingWindow );
	
	GUI.Label (Rect ( 0, 900, x, 50), loadingbar );
}