#pragma strict
var missions : MissionStage1;
var cmp : GameObject;

function Start () {
	cmp = gameObject.Find("complete");
  	missions = cmp.transform.gameObject.GetComponent("MissionStage1");
}
function Update () {
	if(missions.flashEvent)
	{
		Destroy(this.gameObject);
	}
}