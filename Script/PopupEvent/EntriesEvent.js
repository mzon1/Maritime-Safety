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

var entries1Image : Texture2D;
var entries2Image : Texture2D;

var entries1pointImage : Texture2D;
var entries2pointImage : Texture2D;

var wrongentriesImage : Texture2D;

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

var missions : MissionStage2;
var cmp : GameObject;

var enStarter : GameObject;

function Start () {
	print("EntriesEvent!");
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
	
	dummyTexts[0] = "자 이제 입수하는 곳으로 왔어. 이제 망설이지 말고 입수를 해야해. 더 이상 지체하면 위험한 상황에 놓이게 되.";
	dummyTexts[1] = "입수하는 방식은 크게 2가지야. 첫번째 방식이 대부분 사용하는 방식인데 안전하고 초심자가 하기엔 부담이 없기 때문이지.";
	dummyTexts[2] = "입수 자세에서 중요한 사항은 한손으로는 다리 사이를 보호하고 나머지 손으로는 코를 막아야해. 물에 들어가면서 충격으로 코로 물이들어가거나 몸에서 돌출된 부분이 다칠 수 있어.";
	dummyTexts[3] = "그리고 입수하는 동안 절대 몸을 펼치거나 누운 상태로 들어가면 안돼! 방금 전에도 말했지? 높은 곳에서 떨어지면 자칫 목숨을 잃을 수도 있으니 반드시 수직으로 입수 할 것!";
	dummyTexts[4] = "자 그러면 내가 한 말을 기억하고 입수를 하자! 더 이상 이 배에 있으면 안된다고!";
	
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
	
	cmp = gameObject.Find("complete");
  	missions = cmp.transform.gameObject.GetComponent("MissionStage2");
  	
  	enStarter = gameObject.Find("entriesPopevent(Clone)");
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
	
	if(index == 1)
	{
		GUI.DrawTexture(Rect ( 353, 94, 979, 628), imgaeLayout, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect ( 400, 117, 879, 584), entries1Image, ScaleMode.StretchToFill, true, 0);
	}
	if(index == 2)
	{
		GUI.DrawTexture(Rect ( 353, 94, 979, 628), imgaeLayout, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect ( 400, 117, 879, 584), entries1pointImage, ScaleMode.StretchToFill, true, 0);
	}
	if(index == 3)
	{
		GUI.DrawTexture(Rect ( 353, 94, 979, 628), imgaeLayout, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect ( 400, 117, 879, 584), wrongentriesImage, ScaleMode.StretchToFill, true, 0);
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
					Destroy(enStarter);
					Time.timeScale = 1.0;
					//GameManager.guidisenablegame = true;
					GameManager.scenceLock = true;
					missions.entriesComplete();
					//yield WaitForSeconds(3);
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

