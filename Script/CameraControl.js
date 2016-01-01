#pragma strict

var Camera1 : GameObject;
var Camera2 : GameObject;
var Camera3 : GameObject;

function Start () {
	yield WaitForSeconds(14.58);
	Camera1.SetActive(false);
	Camera2.SetActive(true);
	yield WaitForSeconds(16.02);
	Camera2.SetActive(false);
	Camera3.SetActive(true);
	yield WaitForSeconds(8.3);
}

function Update () {

}