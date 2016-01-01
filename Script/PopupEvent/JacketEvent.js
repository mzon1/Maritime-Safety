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

var logLayouts : Texture2D[];

var imgaeLayout : Texture2D;

var grayScaleImage : Texture2D;

var npcImage : Texture2D;

var index : float;

var enableTime : int;

var disableBtn : boolean;

var nextWaitlogtime : int;

final var maximumLog : int = 4;

var dummyTexts : String[];
var logsDummyfont : GUISkin;

var orderlifejacketImage : Texture2D;
var positionJacketImage : Texture2D;
var symbolImage : Texture2D;

var typeBriefing : String;
var charindex : int;

var logSound0 : GameObject;
var logSound1 : GameObject;
var logSound2 : GameObject;
var logSound3 : GameObject;
var logSound4 : GameObject;

var logSounds : GameObject[];

var soundGenerate : GameObject;

var soundcheck : boolean;

function Start () {
	print("JacKetEvent!");
	test = gameObject.Find("GameManager");
  	GameManager = test.transform.gameObject.GetComponent("Manager");
  	
  	Time.timeScale = 0.0;
  	
  	//GameManager.guidisenablegame = false;
  	GameManager.scenceLock = false;
  	
  	logLayouts = new Texture2D[5];
  	
	logLayouts[0] = logLayout0;
	logLayouts[1] = logLayout1;
	logLayouts[2] = logLayout2;
	logLayouts[3] = logLayout3;
	logLayouts[4] = logLayout4;
		
	dummyTexts = new String[5];
	
	dummyTexts[0] = "잠깐! 방을 나가기 전에 뭐 잊은거 없어? 구명조끼를 챙기지\n않았잖아. 구명조끼 없이 바다에서 어떻게 생존하려고 그래?";
	dummyTexts[1] = "구명조끼는 선실 내부에 인원에 맞게 배치되어 있어. 그러니 선실\n내부에 들어오면 구명조끼 위치를 파악하는 것도 꼭 잊지마!";
	dummyTexts[2] = "구명조끼는 그림과 같이 놓여져 있는 경우가 많아. 그리고 위와\n같은 마크가 있는 곳 근처에 있으니 잘 확인해 봐.";
	dummyTexts[3] = "구명조끼 입는 법은 매우 간단해. 그림과 같이 순서대로 착용하면돼.\n일반 조끼 입는 것과 같아. 그리고 버클을 꼭 끼우고 줄을 조여서\n몸에 단단히 장착 시켜야 해.";
	dummyTexts[4] = "끝으로 구명조끼를 입을 수 있는 시간이 없을 정도로 다급하다면\n일단 챙기고 밖으로 나가서 집결지에서 입는 것이 좋아. 그럼 선실\n내부를 잘 살펴서 구명조끼를 챙겨서 방을 나가보자!";
	
	enableTime = 0;
	
	logSounds = new GameObject[5];
	
	logSounds[0] = logSound0;
	logSounds[1] = logSound1;
	logSounds[2] = logSound2;
	logSounds[3] = logSound3;
	logSounds[4] = logSound4;
	
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
	
	if(index == 2)
	{
		GUI.DrawTexture(Rect ( 353, 94, 979, 628), imgaeLayout, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect ( 400, 117, 879, 584), positionJacketImage, ScaleMode.StretchToFill, true, 0);
	}
	
	if(index == 3)
	{
		GUI.DrawTexture(Rect ( 353, 94, 979, 628), imgaeLayout, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect ( 400, 117, 879, 584), orderlifejacketImage, ScaleMode.StretchToFill, true, 0);
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

