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

var boatDestroyImage : Texture2D;
var keeponwaterImage : Texture2D;

var fluidwaterImage : Texture2D;
var entriesdirectImage : Texture2D;

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
	print("BoatDestroyEvent!");
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
	logLayouts[4] = logLayout4;
	
	dummyTexts = new String[maximumLog+1];
	
	dummyTexts[0] = "앗! 큰일이야! 배가 너무 기울어져서 구명보트를 못 쓰게 되어 \n버렸어. 그리고 구명정도 마찬가지로 사용할 수 없게 되었어.";
	dummyTexts[1] = "그렇다고 끝이 아니야! 살 수 있는 방법은 얼마든지 있어! 아까 챙긴 \n구명조끼와 비상조명등만 있다면 구조대가 올 때까지 물 속에서 \n버틸 수 있어. 그러니까 물에 들어가는 '입수'를 해야 해.";
	dummyTexts[2] = "입수를 하기 위해서는 자리 선정이 중요해. 일단 배가 기울어지는 \n반대쪽으로 갈 것. 이유는 배가 침몰하는 쪽으로 소용돌이가 생겨서 \n같이 빨려 들어가게 돼. 그럼 헤엄쳐서 나올 수가 없게 되버려!";
	dummyTexts[3] = "둘째 부유물이 없고, 수직으로 낙하했을 시 배와 부딫히지 않는 곳. \n사실 위급한 상황에서 이런 것을 따질 여유가 없겠지만 이것 하나만 \n기억해. 배가 침몰하는 반대쪽으로 가!";
	dummyTexts[4] = "현재 이 배는 오른쪽으로 기울고 있으니까, 왼쪽 측면을 미끄럼처럼 \n이용해서 바다에 입수하자. 자 그럼 표시가 되어 있는 부분으로 \n가자!";
	
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
	
	if(index == 0)
	{
		GUI.DrawTexture(Rect ( 353, 94, 979, 628), imgaeLayout, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect ( 400, 117, 879, 584), boatDestroyImage, ScaleMode.StretchToFill, true, 0);
	}
	if(index == 1)
	{
		GUI.DrawTexture(Rect ( 353, 94, 979, 628), imgaeLayout, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect ( 400, 117, 879, 584), keeponwaterImage, ScaleMode.StretchToFill, true, 0);
	}
	if(index == 2)
	{
		GUI.DrawTexture(Rect ( 353, 94, 979, 628), imgaeLayout, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect ( 400, 117, 879, 584), fluidwaterImage, ScaleMode.StretchToFill, true, 0);
	}
	if(index == 3)
	{
		GUI.DrawTexture(Rect ( 353, 94, 979, 628), imgaeLayout, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect ( 400, 117, 879, 584), entriesdirectImage, ScaleMode.StretchToFill, true, 0);
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

