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

var jacketEvent : boolean;
var flashEvent : boolean;

var SubmissionCheck : boolean;
var mainissionCheck : boolean;

function Start () {
	missions = new String[3];	
	
	missions[0] = "-선실 내부에서\n 탈출 하기";
	missions[1] = "-구명 조끼를\n찾아서 착용하기";
	missions[2] = "-후레쉬라이트를\n 찾아서 사용하기";
	
	jacketEvent = false;
	flashEvent = false;
	
	missionTitle = "선실 실내 미션";
	
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
}

function OnTriggerEnter(col : Collider)
{
	if(col.gameObject.tag == "Player")
	{
		print("Stage2 Complete!");
		missions[0] = "-성공!";
		mainissionCheck = true;
		fadeStart = true;
		GameManager.gameCheck = false;
		yield WaitForSeconds(3);
		GameManager.nextmission();
	}
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