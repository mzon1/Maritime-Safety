#pragma strict

var missions : MissionStage1;
var cmp : GameObject;

var flashLightHandle : GameObject;

var checkEvent : boolean;

function Start () {
	cmp = gameObject.Find("complete");
  	missions = cmp.transform.gameObject.GetComponent("MissionStage1");
  	
  	checkEvent = false;
}

function Update () {
	if(missions.flashEvent && !checkEvent)
	{
		checkEvent = !checkEvent;
		flashLightHandle.SetActive(true);
	}
}