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

final var maximumLog : int = 2;

var nextWaitlogtime : int;
var dummyTexts : String[];
var logsDummyfont : GUISkin;

var typeBriefing : String;
var charindex : int;

var logSound0 : GameObject;
var logSound1 : GameObject;
var logSound2 : GameObject;

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
	//logLayouts[3] = logLayout3;
	//logLayouts[4] = logLayout4;
	//logLayouts[5] = logLayout5;
	
	dummyTexts = new String[4];
	
	dummyTexts[0] = "큰일이야! 배가 너무 기울어져서 계단을 오르기가 쉽지 않아. \n우리가 일반적으로 쉽게 생각하는 일도 이렇게 특수한 상황에서는 \n쉬운일이 아니게 되버려.";
	dummyTexts[1] = "기울어진 계단을 오리기 위해서는 손잡이를 잡고 한걸음 한걸음 \n도움을 닫는 식으로 올라가야 해. 그리고 주변에 사람들이 많다면 \n서로 손을 잡고 끌어당겨서 빨리 위기를 극복하면 좋지!";
	dummyTexts[2] = "자! 그럼 계단을 하나씩 하나씩 올라가 보자! 위급한 상황일 수록 \n침착하게 서로 도우면 어려울 것이 하나 없다고!";
	
	enableTime = 0;
	
	logSounds = new GameObject[3];
	
	logSounds[0] = logSound0;
	logSounds[1] = logSound1;
	logSounds[2] = logSound2;
	
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

