#pragma strict

var logWindow : Texture2D;
var font : GUISkin;

function Start () {

}

function Update () {

}

function OnGUI()
{
	GUI.skin = font;
	
	GUI.Label (Rect(30, 770, 566, 187), logWindow);
 	GUI.Label (Rect(35, 775, 300, 30), "Log 창" );
}