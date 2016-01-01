#pragma strict

var onOffButton : KeyCode = KeyCode.Escape;
var display : boolean;

var menuWindow : Texture2D;

var optionBtn : GUIStyle;
var selectBtn : GUIStyle;
var exitGbtn : GUIStyle;
var backBtn : GUIStyle;

var backControll : int;

var GameManager : Manager;
var test : GameObject;


function Start () {
	test = gameObject.Find("GameManager");
  	GameManager = test.transform.gameObject.GetComponent("Manager");
  	
	display = false;
}

function Update () {
	if(Input.GetKeyDown(onOffButton))
	{
		if(display)
		{
			display = false;
			GameManager.guidisenablegame = true;
			Time.timeScale = 1; 
		}
		else
		{
			display = true;
			GameManager.guidisenablegame = false;
			Time.timeScale = 0; 
		}
	}
}

function OnGUI()
{
	GUI.depth = 0.0;
	if(display)
	{
		GUI.DrawTexture (Rect (690, 287,300,480), menuWindow, ScaleMode.StretchToFill, true, 0 );
		
		if( GUI.Button(Rect (718, 326, 246,71),"",optionBtn))
		{
			
		}
		if( GUI.Button(Rect (718, 436, 246,71), "",selectBtn))
		{
			Time.timeScale = 1; 
			GameManager.guidisenablegame = true;
			GameManager.back(backControll);
		}
		/*
		if( GUI.Button(Rect (718, 547, 262,87), "",backBtn))
		{
			display = false;
			Time.timeScale = 1; 
		}
		*/
		if( GUI.Button(Rect (718, 654, 246,71), "",exitGbtn))
		{
			Application.Quit();
		}
	}
}