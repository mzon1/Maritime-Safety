#pragma strict

var pregBtn : GUIStyle;
var nextBtn : GUIStyle;

var startBtn : GUIStyle;

var ljWindow : Texture2D;
var emWindow : Texture2D;
var ssWindow : Texture2D;
var ntWindow : Texture2D;

var ljnameload : Texture2D;
var emnameload : Texture2D;
var ssnameload : Texture2D;
var ntnameload : Texture2D;

var ljnamenormal : Texture2D;
var emnamenormal : Texture2D;
var ssnamenormal : Texture2D;
var ntnamenormal : Texture2D;

var mainBG : Texture2D;

var listEx : Texture2D[];
var listName : Texture2D[,];

var index : int = 0;

var GameManager : Manager;
var test : GameObject;

var loadingtime : float;

var bgblack : Texture2D;

function Start () {
	listEx = new Texture2D[4];

	listEx[2] = ljWindow;
	listEx[3] = emWindow;
	listEx[1] = ssWindow;
	listEx[0] = ntWindow;
	
	listName = new Texture2D[4,2];
	
	listName[2,0] = ljnameload;
	listName[2,1] = ljnamenormal;
	
	listName[3,0] = emnameload;
	listName[3,1] = emnamenormal;
	
	listName[1,0] = ssnameload;
	listName[1,1] = ssnamenormal;
	
	listName[0,0] = ntnameload;
	listName[0,1] = ntnamenormal;
	
	test = gameObject.Find("GameManager");
  	GameManager = test.transform.gameObject.GetComponent("Manager");
}

function Update () {
	loadingtime += Time.deltaTime;
}

function OnGUI()
{
	GUI.depth = 0.9;
	
	GUI.DrawTexture (Rect (0,0,1680,1050), bgblack, ScaleMode.StretchToFill, true, 0 );
	
	GUI.DrawTexture (Rect (0, 0, 1680, 1050), mainBG, ScaleMode.StretchToFill, true, 0 );
	GUI.DrawTexture (Rect (305, 166, 1070, 767), listEx[index], ScaleMode.StretchToFill, true, 0 );
	
	if(index == 0)
	{
		GUI.DrawTexture (Rect (305,92,261,59), listName[0, 0], ScaleMode.StretchToFill, true, 0 );
	}
	else
	{
		GUI.DrawTexture (Rect (305,92,261,59), listName[0, 1], ScaleMode.StretchToFill, true, 0 );
	}
	
	if(index == 1)
	{
		GUI.DrawTexture (Rect (576,92,261,59), listName[1, 0], ScaleMode.StretchToFill, true, 0 );
	}
	else
	{
		GUI.DrawTexture (Rect (576,92,261,59), listName[1, 1], ScaleMode.StretchToFill, true, 0 );
	}
	
	if(index == 2)
	{
		GUI.DrawTexture (Rect (849,92,261,59), listName[2, 0], ScaleMode.StretchToFill, true, 0 );
	}
	else
	{
		GUI.DrawTexture (Rect (849,92,261,59), listName[2, 1], ScaleMode.StretchToFill, true, 0 );
	}
	
	if(index == 3)
	{
		GUI.DrawTexture (Rect (1120,92,261,59), listName[3, 0], ScaleMode.StretchToFill, true, 0 );
	}
	else
	{
		GUI.DrawTexture (Rect (1120,92,261,59), listName[3, 1], ScaleMode.StretchToFill, true, 0 );
	}
	
	if( GUI.Button (Rect(305, 878, 367, 75), "", pregBtn))
	{	
		index--;
		if(index < 0)
		{
			index = 3;
		}
	}
	
	if( GUI.Button (Rect(1008, 878, 367, 75), "", nextBtn))
	{	
		index++;
		if(index > 3)
		{
			index = 0;
		}
	}
	
	if(loadingtime > 3)
	{
		if( GUI.Button (Rect(739, 840, 202, 73), "", startBtn))
		{	
			GameManager.Briefing();
			//GameManager.mainGame();
			Destroy(this.gameObject);
		}
	}
	
}


