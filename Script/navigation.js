#pragma strict

var nav : NavMeshAgent;
var destination : GameObject;

var missions : MissionStage1;
var cmp : GameObject;

function Start () {
	 destination = gameObject.Find("Destination");
	 
	 cmp = gameObject.Find("complete");
  	 missions = cmp.transform.gameObject.GetComponent("MissionStage1");

}

function Update () {
	nav.destination = destination.gameObject.transform.position;
	if(missions.mainissionCheck)
	{
		print("destroy character! (missioncomplet)");
		Destroy(this.gameObject);
	}
}

function OnTriggerEnter (col : Collider)
{
	if(col.gameObject.tag == "destination")
	{
		print("destroy character! (collision)");
		Destroy(this.gameObject);
	}
}