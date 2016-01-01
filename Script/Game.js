#pragma strict

var leftBtn : GUIStyle;
var rightBtn : GUIStyle;
var startBtn : GUIStyle;
var infoBtn : GUIStyle;
var explainBtn : GUIStyle;
var sattingBtn : GUIStyle;
var offBtn : GUIStyle;

var mainWindow : Texture2D;
var mainBox : Texture2D;

var msbgWindow : Texture2D;
var mpbgWindow : Texture2D;
var srbgWindow : Texture2D;

var msWindow : Texture2D;
var mpWindow : Texture2D;
var srWindow : Texture2D;

var tileBar : Texture2D;
var bgblack : Texture2D;

var mainWindowx : float;
var bgWindowx : float;
var textWindowx : float;
var leftBtnx : float;
var rightBtnx : float;
var startBtnx : float;
var infoBtnx : float;
var explainBtnx : float;
var sattingBtnx : float;
var offBtnx : float;

var tileBarx : float;
var mainBoxx : float;

var GameManager : Manager;
var test : GameObject;

var mLerpTimer : float;

var AnimCurve : AnimationCurve;

var AnimCurve1 : AnimationCurve;
var WanderSpeed : float;

var mainTime : float;
var settupTime : float;

var check : boolean = true;

var textList : Texture2D[];
var bgList : Texture2D[];

var index : int = 0;

function Awake()
{

}

function Start () {

	test = gameObject.Find("GameManager");
  	GameManager = test.transform.gameObject.GetComponent("Manager");

  textWindowx = 664-1680;
  mainWindowx = -1680;
  bgWindowx = 314 - 1680;
  leftBtnx = 244 - 1680;
  rightBtnx = 1372 - 1680;
  
  tileBarx = 316 - 1680;
  mainBoxx =  243 - 1680;
  
  startBtnx = - 220;
  infoBtnx = - 248;
  explainBtnx = - 248;
  sattingBtnx = - 248;
  offBtnx = - 248;
  
  mLerpTimer = 0.0f;
  WanderSpeed = 0.1f;  
  mainTime = 0.0f;
  
  check = true;
  
  textList = new Texture2D[3];
  
  textList[0] = msWindow;
  textList[1] = mpWindow;
  textList[2] = srWindow;
  
  bgList = new Texture2D[3];
  
   bgList[0] = msbgWindow;
   bgList[1] = mpbgWindow;
   bgList[2] = srbgWindow;
  
  mainMove();
  yield WaitForSeconds(0.5);
  settupMove();
}

function Update () {
/*
	if(mLerpTimer < 1.0f)
	{
		var curve1 : float = AnimCurve.Evaluate(mLerpTimer);
		textWindowx = textWindowx + (313 - textWindowx) * curve1;
		print("?");
	}
	*/
	
	//mLerpTimer += Time.deltaTime * WanderSpeed;
}

function mainMove()
{
	while(mainTime < 1.0f)
	{
		var curve : float = AnimCurve.Evaluate(mainTime);
		textWindowx = textWindowx + (664 - textWindowx) * curve;
		bgWindowx = bgWindowx + (314 - bgWindowx) * curve;
		mainWindowx = mainWindowx + (0 - mainWindowx) * curve;
		leftBtnx = leftBtnx + (244 - leftBtnx) * curve;
		rightBtnx = rightBtnx + (1372 - rightBtnx) * curve;
		tileBarx = tileBarx + (316 - tileBarx) * curve;
		mainBoxx = mainBoxx + (243 - mainBoxx) * curve;
		
		yield WaitForSeconds(0.01);
		
		mainTime += Time.deltaTime * WanderSpeed;	 
	}
	mainTime = 0.0f;
}

function settupMove()
{	
	while(settupTime < 1.0f)
	{
		var curve1 : float = AnimCurve.Evaluate(settupTime);
		startBtnx = startBtnx + (739 - startBtnx) * curve1;
		infoBtnx = infoBtnx + (81 - infoBtnx) * curve1;
		explainBtnx = explainBtnx + (87 - explainBtnx) * curve1;
		sattingBtnx = sattingBtnx + (167 - sattingBtnx) * curve1;
		offBtnx = offBtnx + (161 - offBtnx) * curve1;			
		
		yield WaitForSeconds(0.01);
		
		settupTime += Time.deltaTime * WanderSpeed;	 
	}
	settupTime = 0;
}

function OnGUI()
{
	GUI.depth = 1.1;
	if(GameManager.guidisenablemain)
	{
		GUI.color.a = 1.0f;
	}
	else
	{
		GUI.color.a = 0.5f;
		GUI.DrawTexture (Rect (0,0,1680,1050), bgblack, ScaleMode.StretchToFill, true, 0 );
		GUI.color.a = 0.2f;
	}
		
	GUI.DrawTexture (Rect ( mainWindowx, 0, 1680, 1050), mainWindow, ScaleMode.StretchToFill, true, 0 );
	GUI.DrawTexture (Rect ( mainBoxx , 144, 1194, 681), mainBox, ScaleMode.StretchToFill, true, 0  );
	
	GUI.DrawTexture (Rect ( bgWindowx, 199, 1054, 586), bgList[index], ScaleMode.StretchToFill, true, 0 );	
	GUI.DrawTexture (Rect ( textWindowx, 145, 352, 54), textList[index], ScaleMode.StretchToFill, true, 0 );
	GUI.DrawTexture (Rect ( tileBarx , 0, 1048, 86), tileBar, ScaleMode.StretchToFill, true, 0  );

	if(GameManager.guidisenablemain){
		if( GUI.Button (Rect(leftBtnx, 391, 65, 158), "", leftBtn))
		{	
			index--;
			if(index < 0)
			{
				index = 2;
			}
		}
		
		if( GUI.Button (Rect(rightBtnx, 391, 65, 158), "", rightBtn))
		{	
			index++;
			if(index > 2)
			{
				index = 0;
			}
		}

		if( GUI.Button (Rect(startBtnx, 843, 202, 73), "", startBtn))
		{
			GameManager.gameStart(index);		
		}
		
		if( GUI.Button (Rect(infoBtnx, 939, 52, 52), "", infoBtn))
		{	
			Time.timeScale = 0.0;
			GameManager.informationKSSI();
		}
		
		/*
		if( GUI.Button (Rect(explainBtnx, 922, 73, 73), "", explainBtn))
		{	
			GameManager.explain(0);
		}
		
		if( GUI.Button (Rect(sattingBtnx, 922, 73, 73), "", sattingBtn))
		{	
		
		}
		*/
				
		if( GUI.Button (Rect(offBtnx, 939, 52, 52), "", offBtn))
		{	
			Application.Quit();
		}
	}
	else
	{
		GUI.Label (Rect(leftBtnx, 391, 65, 158), "", leftBtn);
		GUI.Label (Rect(rightBtnx, 391, 65, 158), "", rightBtn);
		GUI.Label (Rect(startBtnx, 843, 202, 73), "", startBtn);
		GUI.Label  (Rect(infoBtnx, 939, 52, 52), "", infoBtn);
		GUI.Label  (Rect(offBtnx, 939, 52, 52), "", offBtn);
	}
}
