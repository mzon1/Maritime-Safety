#pragma strict

var GameManager : Manager;
var test : GameObject;

var nextBtn : GUIStyle;
var startBtn : GUIStyle;

var logLayout0 : Texture2D;
var logLayout1 : Texture2D;
var logLayout2 : Texture2D;
var logLayout3 : Texture2D;
var logLayout4 : Texture2D;
var logLayout5 : Texture2D;

var logLayouts : Texture2D[];

var imgaeLayout : Texture2D;

var grayScaleImage : Texture2D;

var npcImage : Texture2D;

var index : float;

var enableTime : int;

var disableBtn : boolean;

final var maximumLog : int = 3;

var nextWaitlogtime : int;

var dummyTexts : String[];
var logsDummyfont : GUISkin;

var typeBriefing : String;
var charindex : int;

var logSound0 : GameObject;
var logSound1 : GameObject;
var logSound2 : GameObject;
var logSound3 : GameObject;

var logSounds : GameObject[];

var soundGenerate : GameObject;

var soundcheck : boolean;

function Start () {
	test = gameObject.Find("GameManager");
  	GameManager = test.transform.gameObject.GetComponent("Manager");
  	
  	Time.timeScale = 0.0;
  	
  	//GameManager.guidisenablegame = false;
  	GameManager.scenceLock = false;
  	
  	logLayouts = new Texture2D[maximumLog+1];
  	
	logLayouts[0] = logLayout0;
	logLayouts[1] = logLayout1;
	logLayouts[2] = logLayout2;
	logLayouts[3] = logLayout3;
	//logLayouts[4] = logLayout4;
	//logLayouts[5] = logLayout5;
	
	dummyTexts = new String[4];
	
	dummyTexts[0] = "조심해! 배가 기울어 지고 있다고! 침몰하는 배는 물이 유입하는 \n곳에 따라 어디로 기울어 질지 몰라. 그렇기 때문에 이에 대처하는 \n법을 잘 알고 있어야 해.";
	dummyTexts[1] = "배가 침몰하면 어떤식으로 기울어질지 아무도 몰라. 그렇기 때문에 \n주변에 쓰러지는 물건이 있는지 잘 살피면서 가야 해. 물건에 \n깔리거나 다치면 생존률이 낮아지는건 당연한 얘기니까.";
	dummyTexts[2] = "또한 배가 기울어지면 중심을 잘 잡아서 구르거나 넘어지는 상황을\n 피해야 해. 그렇기 위해서는 몸을 낮추거나 고정된 물건, \n예를 들어 손잡이 같은 것을 잡고 나아가야 해.";
	dummyTexts[3] = "그냥 나간다고 전부는 아니야. 곳곳에 위험요소와 행존을 위한 \n도구들을 잘 챙겨 나가야해. 신경써서 앞으로 가보자!";
	
	enableTime = 0;
	
	logSounds = new GameObject[4];
	
	logSounds[0] = logSound0;
	logSounds[1] = logSound1;
	logSounds[2] = logSound2;
	logSounds[3] = logSound3;
	
	soundcheck = true;
	
	index = 0;
	
	disableBtn = false;
	
	nextWaitlogtime = 50;
	
	typeBriefing = "";
	charindex = 0;
}

function Update () {

}

function OnGUI()
{
	GUI.depth = 0.0;
	GUI.DrawTexture (Rect ( 0, 0, 1680, 1050), grayScaleImage, ScaleMode.StretchToFill, true, 0);
	GUI.DrawTexture (Rect ( 351, 787, 983, 238), logLayouts[index], ScaleMode.StretchToFill, true, 0);
	
	if(soundcheck)
	{
		soundGenerate = Instantiate(logSounds[index], logSounds[index].transform.position, logSounds[index].transform.rotation)as GameObject;
		soundcheck = false;
	}
		
	GUI.DrawTexture (Rect ( 306, 195, 336, 592), npcImage, ScaleMode.StretchToFill, true, 0);
	
	if(enableTime > nextWaitlogtime){
		disableBtn = false;
		if(!disableBtn)
		{
			if(maximumLog == index)
			{
				if( GUI.Button (Rect(1203, 952, 87, 30), "", startBtn))
				{	
					Destroy(soundGenerate);
					Time.timeScale = 1.0;
					//GameManager.guidisenablegame = true;
					GameManager.scenceLock = true;
					gameObject.SetActive(false);
				}
			}
			else
			{
				if( GUI.Button (Rect(1203, 952, 87, 30), "", nextBtn))
				{	
					Destroy(soundGenerate);
					index++;
					disableBtn = !disableBtn;
					enableTime = 0;
					typeBriefing = "";
					charindex = 0;
					soundcheck = true;
				}
			}
		}
	}
	enableTime++;
	
	if(dummyTexts[index].Length > charindex && enableTime % 3 == 0)
	{
		typeBriefing += dummyTexts[index][charindex];
		charindex++;
	}
	
	GUI.depth = 0;
	GUI.skin = logsDummyfont;
	GUI.Label (Rect ( 381, 829, 910, 153), typeBriefing);
}

