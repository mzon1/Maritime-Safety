#pragma strict

var floor : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter (col : Collider)
{
	if(col.gameObject.tag == "Player")
	{
		print("lightOn!");
		floor.gameObject.SetActive(true);
		Destroy(this.gameObject);
	}
}