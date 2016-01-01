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

var innerImage : Texture2D;
var lifeJacketImage : Texture2D;
var flashlightImage : Texture2D;

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
	print("TiemEvent!");
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
	
	dummyTexts[0] = "정신 차려! 지금은 위급한 상황이라구! 지금 들리는 경보는 퇴선을 \n명령하는 신호야. 무슨일인지 모르지만 배에 퇴선 명령이 떨어지면 \n이 배는 곧 가라앉을 거야!";
	dummyTexts[1] = "왼쪽 상단을 보면 제한 시간이 5분으로 표시 되어 있어. 통상 배가 \n가라앉기 전까지 5분 정도의 생존 시간이 있어. 5분이 넘으면 생존 \n가능성이 낮아!";
	dummyTexts[2] = "5분 안에 탈출 하기 위해서는 빠른 달리기 실력만으로는 안돼. \n선실 내부 구조와 비상 탈출구의 위치를 반드시 확인 해야 해.";
	dummyTexts[3] = "그리고 한가지 더! 구명조끼와 후레쉬를 반드시 챙겨야해. 구명조끼는 \n바다에서 생존과 직결되는 필수 장비이고 후에쉬는 어두운 선실을 \n나갈 때, 그리고 바다에서 위치를 알릴 때 필수적인 장비야.";
	dummyTexts[4] = "자! 내가 말한 내용을 잘 기억하고 선실을 빠져나가서 집결지로 \n가보자!";
	
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
		GUI.DrawTexture(Rect ( 400, 117, 879, 584), innerImage, ScaleMode.StretchToFill, true, 0);
	}
	
	if(index == 3)
	{
		GUI.DrawTexture(Rect ( 353, 94, 979, 628), imgaeLayout, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect ( 400, 117, 879, 584), lifeJacketImage, ScaleMode.StretchToFill, true, 0);
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

