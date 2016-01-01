#pragma strict

var Timecheck : float;

var GameManager : Manager;
var test : GameObject;

function Start () {
	Timecheck = 0;
	
	test = gameObject.Find("GameManager");
  	GameManager = test.transform.gameObject.GetComponent("Manager");
}

function FixedUpdate () {
	Timecheck += Time.deltaTime;
	if(Timecheck > 39)
	{
		GameManager.mainGame();
		Destroy(this.gameObject);
	}
}