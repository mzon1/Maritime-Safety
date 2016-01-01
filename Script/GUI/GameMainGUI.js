#pragma strict

/*
var minimapWindow : Texture2D;
var missionWindow : Texture2D;
var timeWindow : Texture2D;
var logWindow : Texture2D;
*/
var rightWindow : Texture2D;
var leftWindow : Texture2D;

var bgblack : Texture2D;
var font : GUISkin;

var GameManager : Manager;
var test : GameObject;

function Start () {
	test = gameObject.Find("GameManager");
  	GameManager = test.transform.gameObject.GetComponent("Manager");
}

function Update () {

}

function OnGUI()
{
	GUI.depth = 1.0;
	if(GameManager.guidisenablegame)
	{
		GUI.color.a = 1.0f;
	}
	else
	{
		GUI.color.a = 0.5f;
		GUI.DrawTexture (Rect (0,0,1680,1050), bgblack, ScaleMode.StretchToFill, true, 0 );
		GUI.color.a = 0.2f;
	}
	
	GUI.DrawTexture (Rect (1089,0,591,1050), rightWindow, ScaleMode.StretchToFill, true, 0 );
	GUI.DrawTexture (Rect (0,0,630,1050), leftWindow, ScaleMode.StretchToFill, true, 0 );
	/*
	GUI.Label (Rect(1300, 350, 252,332), missionWindow);
	
	GUI.Label (Rect(1300,20, 252,257), minimapWindow);
	
	GUI.Label (new Rect (0, 0, 368, 134), timeWindow);
	
	GUI.Label (Rect(30, 770, 566, 187), logWindow);
	*/
	GUI.skin = font;
 	//GUI.Label (Rect(35, 775, 300, 30), "Log 창" );
}