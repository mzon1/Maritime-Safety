#pragma strict

var briefingText : String;
var fontType : GUISkin;
var letterPause = 0.2;

var typingsound : AudioClip;

var typeBriefing : String = "";

var briefingTime : float;


function Start () {
	briefingTime = 30;
	briefingText = "2014년 11월 19일 \n01시 50분, \n상일동 동남쪽 \n28마일 해상.\n\n\n\n승무원 50명, 승객 340명 \n탑승 중.\n\n\n\n현재 암초에 선수 하단이 \n파손되어 침수 중.";
	TypeText();
}

function FixedUpdate () {
	briefingTime -= Time.deltaTime;
}

function OnGUI()
{
	GUI.skin = fontType;
	if(briefingTime <=1)
	{
		GUI.color.a = briefingTime;
	}
	GUI.Label (Rect(1000, 200, 400, 600), typeBriefing);
}

function TypeText()
{
	for(var letter in briefingText.ToCharArray())
	{
		//guiText.text += letter;
		typeBriefing += letter;
		if(typingsound && !(letter == ' ' || letter == '\n'))
			audio.PlayOneShot(typingsound);
		yield WaitForSeconds(letterPause);
	}
}
