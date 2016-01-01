#pragma strict

var missions : String[];
var missionTitle : String;

var font : GUISkin;

var GameManager : Manager;
var test : GameObject;

var hit : RaycastHit;
var objecttest : GameObject;

var bgblack : Texture2D;
var fadeStart : boolean;

var fadeTime : float;

var SubmissionCheck : boolean;
var mainissionCheck : boolean;

function Start () {
	missions = new String[2];	
	
	missions[0] = "-구명보트가 있는 집결지로 향하기.";
	missions[1] = "-입수 장소로 가서 입수 하기";

	missionTitle = "선박 외부 미션";
	
	test = gameObject.Find("GameManager");
  	GameManager = test.transform.gameObject.GetComponent("Manager");
  	
  	fadeTime = 0;
  	SubmissionCheck = false;
  	mainissionCheck = false;
}

function FixedUpdate () {
	if(fadeStart)
	{
		fadeTime += Time.deltaTime/3.0f;
	}
	if(fadeTime > 1.0f)
	{
		GameManager.enddingScence();
	}
}

function entriesComplete()
{
	print("entriesComplete in");
	missions[1] = "-성공!";
	mainissionCheck = true;
	fadeStart = true;
}

function OnGUI()
{

	GUI.depth = 0.1;
	if(GameManager.guidisenablegame)
	{
		GUI.color.a = 1.0f;
	}
	else
	{
		GUI.color.a = 0.5f;
	}
	GUI.skin = font;
		
	GUI.Label (Rect ( 1404, 260, 300, 60), missionTitle);
		
	for(var i = 0; i < missions.length; i ++)
	{
		GUI.Label (Rect ( 1424, 300 + i*50, 300, 60), missions[i]);
	}

	GUI.depth = 0.0;
	GUI.color.a = fadeTime;
	GUI.DrawTexture (Rect ( 0 , 0, 1680, 1050), bgblack, ScaleMode.StretchToFill, true, 0  );
	
}