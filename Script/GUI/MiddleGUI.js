#pragma strict

var startBtn : GUIStyle;
var backBtn : GUIStyle;

var mainWindow : Texture2D;
var tileBar : Texture2D;
var bgWindow : Texture2D;

var GameManager : Manager;
var test : GameObject;

var AnimCurve : AnimationCurve;

var mLerpTimer : float;

var startBtnx : float;
var backBtnx : float;
var mainWindowx : float;
var tileBarx : float;

var WanderSpeed : float;

var bgalpha : float;
var bgblack : Texture2D;

function Start () {
	startBtnx = - 2000;
  	backBtnx = - 2000;
  	mainWindowx = - 1680;
  	tileBarx = -1680;
  	
  	bgalpha = 0.0;
  
  	mLerpTimer = 0.0f;
  	WanderSpeed = 0.1f;  

  	test = gameObject.Find("GameManager");
  	GameManager = test.transform.gameObject.GetComponent("Manager");
  
  	 mainMove();
}

function Update () {

}

function mainMove()
{
	while(mLerpTimer < 1.0f)
	{
		var curve : float = AnimCurve.Evaluate(mLerpTimer);
		mainWindowx  = mainWindowx  + (0 - mainWindowx ) * curve;
		startBtnx = startBtnx + (602 - startBtnx) * curve;
		backBtnx = backBtnx + (842 - backBtnx) * curve;
		tileBarx = tileBarx + (316 - tileBarx) * curve;
		
		bgalpha = bgalpha + (1.0 - bgalpha) * curve;
		
		yield WaitForSeconds(0.01);
		
		mLerpTimer += Time.deltaTime * WanderSpeed;	 
	}
	mLerpTimer = 0.0f;
}

function OnGUI()
{
	GUI.depth = 1.0;
	
	GUI.DrawTexture (Rect ( 0 , 0, 1680, 1050), bgblack, ScaleMode.StretchToFill, true, 0  );
	GUI.color.a = bgalpha;
	GUI.DrawTexture (Rect ( 0 , 0, 1680, 1050), bgWindow, ScaleMode.StretchToFill, true, 0  );
	
	GUI.color.a = 1.0;
	GUI.DrawTexture (Rect ( mainWindowx , 0, 1680, 1050), mainWindow, ScaleMode.StretchToFill, true, 0  );
	GUI.DrawTexture (Rect ( tileBarx , 0, 1048, 86), tileBar, ScaleMode.StretchToFill, true, 0  );

	if( GUI.Button (Rect(startBtnx , 956, 237, 53), "", startBtn))
	{	
		GameManager.mddilestart(2);
	}
	
	if( GUI.Button (Rect(backBtnx, 956, 237, 53), "", backBtn))
	{	
		GameManager.back(2);
	}
}