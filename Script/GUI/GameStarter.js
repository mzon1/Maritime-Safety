#pragma strict

var GameManager : Manager;
var test : GameObject;

var stage : int;

function Start () {
	test = gameObject.Find("GameManager");
  	GameManager = test.transform.gameObject.GetComponent("Manager");
  	
  	GameManager.gameMissionStage = stage;
}

function Update () {
	
}

function OnGUI()
{
	
}