#pragma strict

var dtime : float;

function Start () {
	dtime = 2.0;
}

function Update () {
	dtime = dtime - Time.deltaTime;
	if(dtime < 0.0)
	{
		Destroy(this.gameObject);
	}
}