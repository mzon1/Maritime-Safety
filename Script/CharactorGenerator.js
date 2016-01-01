#pragma strict

var chractor1 : GameObject;
var chractor2 : GameObject;
var chractor3 : GameObject;

var charators : GameObject[];

var testObject : GameObject;

var generateTime : float;

final var MAXGCNUM : int = 10;

var checkGCnum : int;

function Start () {
	charators = new GameObject[3];
	
	charators[0] = chractor1;
	charators[1] = chractor2;
	charators[2] = chractor3;
	
	generateTime = 0;
	
	checkGCnum = 0;
}

function FixedUpdate () {
	generateTime += Time.deltaTime;
	var randGeneTime = Random.Range(10,30);
	
	if(generateTime > randGeneTime && checkGCnum < MAXGCNUM)
	{
		var rand = Random.Range(0,2);
		//var ls : GameObject = Instantiate(testObject, this.gameObject.transform.position, this.gameObject.transform.rotation)as GameObject;
		var ls : GameObject = Instantiate(charators[rand], this.gameObject.transform.position, this.gameObject.transform.rotation)as GameObject;	
		generateTime = 0;
		checkGCnum++;
	}
}