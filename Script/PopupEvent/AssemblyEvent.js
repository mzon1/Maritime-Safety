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

final var maximumLog : int = 3;

var dummyTexts : String[];
var logsDummyfont : GUISkin;

var bgblack : Texture2D;
var fadeStart : boolean;

var fadeTime : float;

var lifeboatImage : Texture2D;
var liferafttImage : Texture2D;

var assemblysymbolImage : Texture2D;
var assemblydirectImage : Texture2D;

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
	print("AssemblyEvent!");
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
	
	dummyTexts = new String[4];
	
	dummyTexts[0] = "우여 곡절 끝에 밖으로 나왔어. 정말 잘했어! 하지만 아직 끝난 \n것이 아니야. 집결지로 가서 탈출 수단을 이용해야 이 배에서 벗어날 \n수 있어.";
	dummyTexts[1] = "탈출 수단은 구명보트와 구명정이 있어. 둘의 차이는 인원수부터 \n구급 물품 보유량등 다양하게 있지만 둘 다 생존을 위한 모든 도구들이 \n구비되어 있어. 일단 구명보트와 구명정을 타면 위기에서 \n벗어났다고 할 수 있지.";
	dummyTexts[2] = "집결지는 위와 같은 마크로 되어 있으니 잘 봐두라고, 그리고 모든 \n선실 내부에는 해당 마크와 방향이 표시되어 있으니 선실 내 외부를 \n파악하지 못했다고 해도 저 마크를 잘 따라가도록 해.";
	dummyTexts[3] = "자 거의 다 왔어. 이 배는 양 옆에 구명 보트가 구비 되어 있으니 \n아직 침수되지 않은 왼쪽으로 가자. 경사가 기울어져 있으니 손잡이를 \n꼭 잡고 이동하는거야!";
	
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

function FixedUpdate () {
	

}

function OnGUI()
{
	if(fadeTime < 0.0)
	{
		GUI.depth = 0.0;
		
		GUI.color.a = 1.0;
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
			GUI.DrawTexture(Rect ( 400, 117, 879, 584), lifeboatImage, ScaleMode.StretchToFill, true, 0);
		}
		if(index == 2)
		{
			GUI.DrawTexture(Rect ( 353, 94, 979, 628), imgaeLayout, ScaleMode.StretchToFill, true, 0);
			GUI.DrawTexture(Rect ( 400, 117, 879, 584), assemblysymbolImage, ScaleMode.StretchToFill, true, 0);
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
	else
	{	
		fadeTime -= 0.005;
		
		GUI.color.a = fadeTime;
		GUI.DrawTexture (Rect ( 0 , 0, 1680, 1050), bgblack, ScaleMode.StretchToFill, true, 0  );
	}
}

