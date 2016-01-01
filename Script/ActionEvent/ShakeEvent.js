#pragma strict

var cameraShake : CameraShake;
var rotationShip : RotationShip;

function Start () {
	
}

function Update () {

}

function OnTriggerEnter (col : Collider)
{
	if(col.gameObject.tag == "Player")
	{
		print("kang!");
		cameraShake.Shake();
		rotationShip.event = true;
		Destroy(this.gameObject);
	}
}