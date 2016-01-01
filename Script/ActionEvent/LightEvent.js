#pragma strict

var floor : changeLight;

function Start () {

}

function Update () {

}

function OnTriggerEnter (col : Collider)
{
	if(col.gameObject.tag == "Player")
	{
		print("blinking!");
		floor.changeLightvalue = true;
		Destroy(this.gameObject);
	}
}
