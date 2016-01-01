#pragma strict

var logs : String[];
var font : GUISkin;
var warnningfont : GUISkin;

var reTime : float;
var newTime : float;

var logSystemmets : String[];

var logSystemmets2 : String[];

var index : int;

//var checkGame = false;

var warnningTime : float;

var randomTime : int;

var GameManager : Manager;
var test : GameObject;

var currentStage : int;
	
function Start () {
	test = gameObject.Find("GameManager");
  	GameManager = test.transform.gameObject.GetComponent("Manager");
  	
	logs = new String[5];
	
	for(var i = 0; i < logs.length; i ++)
	{
		logs[i] = "";
	} 
	
	newTime = 0;
	reTime = 0;
	index = 0;
	
	warnningTime = 0;
	
	logSystemmets = new String[5];
	logSystemmets[0] = "선박직원1 : 빨리 선실 내부에서 탈출하세요!";
	logSystemmets[1] = "선박직원2 : 집결지 마크를 향해 가세요!!";
	logSystemmets[2] = "선박직원3 : 침착 하게 이동해 주세요!";
	logSystemmets[3] = "선박직원4 : 조끼와 후레쉬 라이트를 꼭 챙기세요!";
	logSystemmets[4] = "선박직원5 : 줄을 서서 이동하세요!!";
	
	logSystemmets2 = new String[5];
	logSystemmets2[0] = "선박직원1 : 구명보트가 있는 곳으로 가십시오!";
	logSystemmets2[1] = "선박직원2 : 집결지는 배의 좌우 갑판에 있습니다!!";
	logSystemmets2[2] = "선박직원3 : 침착 하게 이동해 주세요!";
	logSystemmets2[3] = "선박직원4 : 구조물을 잡고 이동하십시오! 배가 많이 기울어져 있습니다!";
	logSystemmets2[4] = "선박직원5 : 줄을 서서 이동하세요!!";

	randomTime = 10;
	currentStage = 0;
}

function Update () {
	if(currentStage != GameManager.gameMissionStage)
	{
		currentStage = GameManager.gameMissionStage;
		for(var i = 0; i < logs.length; i ++)
		{
			logs[i] = "";
		}
	}
	if( GameManager.gameCheck )
	{
		newTime += Time.deltaTime;
		reTime += Time.deltaTime;
		warnningTime -= Time.deltaTime;
		
		if(reTime >= randomTime && GameManager.gameMissionStage == 1)
		{
			var rand : int = Random.Range(0, 4);
			logCollecter(logSystemmets[rand]);
			randomTime = Random.Range(5, 15);
			reTime = 0;		
		}
		
		if(reTime >= randomTime && GameManager.gameMissionStage == 2)
		{
			var rand2 : int = Random.Range(0, 4);
			logCollecter(logSystemmets2[rand2]);
			randomTime = Random.Range(5, 15);
			reTime = 0;
			
		}
		/*
		if(newTime >= 5)
		{
			if(index >= 1)
			{
				logs[index-1] = ""; 
				index--;
			}
			newTime = 0;
		}
		*/
	}
	
}

function OnGUI()
{
	if(GameManager.gameCheck)
	{
		if(GameManager.guidisenablegame)
		{
			GUI.color.a = 1.0f;
		}
		else
		{
			GUI.color.a = 0.5f;
		}
		
		GUI.skin = font;
		
		for(var i = 0; i < logs.length; i ++)
		{
			GUI.Label (Rect ( 50, 985 - i*25, 500, 30), logs[i]);
		}
		
		if(warnningTime > 0 && GameManager.scenceLock)
		{
			GUI.skin = warnningfont;
			GUI.Label (Rect ( 350,  350, 800, 200), logs[0]);
		}
	}
}

function logCollecter(log : String)
{
	warnningTime = 3.0f;
	index++;
	for(var i = logs.length-1; i > 0; i --)
	{
		logs[i] = logs[i-1];
	}
	logs[0] = log;
	log = "";
	//newTime = 0;
}

