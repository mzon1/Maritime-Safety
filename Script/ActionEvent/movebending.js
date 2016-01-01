#pragma strict

var moveTrigger : float;
var startEvent : boolean;

function Start () {
	moveTrigger = 0;
	startEvent = false;
}

function FixedUpdate () {
	if(startEvent)
	{
		moveTrigger -= Time.deltaTime/100;
		gameObject.transform.rotation.z += moveTrigger;
	}
}