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

var confuseImage : Texture2D;
var orderlineImage : Texture2D;

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
	
	dummyTexts[0] = "앗 이런 퇴선 하려는 사람들로 인해 아비규환이야! 사람들로 인해서 \n복도를 지나갈 수 없게 되었어. 이러면 시간 내에 못 \n나갈지도 몰라!";
	dummyTexts[1] = "누구나 이런 상황에 처하면 먼저 살기 위해 뛰쳐나가게 될 거야. \n하지만 빨리 간다고 능사가 아니야. 질서 정연하게 나가야 길이 \n안 막히고 더 빨리 나갈 수 있단 말이지!";
	dummyTexts[2] = "승무원들이 나와서 질서를 유지하겠지만 만약 승무원들이 미처 \n오지 않는다면 서로가 질서를 지키겠다는 마음으로 위급한 \n상황을 잘 이겨나가야 겠지?";
	dummyTexts[3] = "자 이제 질서 정연하게 나가보자! 남들이 하지 않더라도 \n스스로가 이끌어야 하는 거야!";
	
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
	
	if(index == 1)
	{
		GUI.DrawTexture(Rect ( 353, 94, 979, 628), imgaeLayout, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect ( 400, 117, 879, 584), confuseImage, ScaleMode.StretchToFill, true, 0);
	}
	
	if(index == 2)
	{
		GUI.DrawTexture(Rect ( 353, 94, 979, 628), imgaeLayout, ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect ( 400, 117, 879, 584), orderlineImage, ScaleMode.StretchToFill, true, 0);
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

