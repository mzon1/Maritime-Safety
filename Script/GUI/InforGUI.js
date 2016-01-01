#pragma strict

var information : Texture2D;
var backBtn : GUIStyle;

var display : boolean;

var GameManager : Manager;
var test : GameObject;

function Start () {  
	test = gameObject.Find("GameManager");
  	GameManager = test.transform.gameObject.GetComponent("Manager");	
	display = true;
}

function Update () {
	
}

function OnGUI()
{
	GUI.depth = 0.0;
	if(display)
	{
		GUI.Label (Rect (565, 275,547,499), information);
		
		if( GUI.Button(Rect (712, 675, 256,64), "", backBtn))
		{
			Time.timeScale = 1.0;
			GameManager.guidisenablemain = true;
			Destroy(this.gameObject);
		}
	}
}