#pragma strict

var AnimCurve : AnimationCurve;
var mLerpTimer : float;
var  WanderSpeed : float;

var shiprotaion : Transform;
var next : Transform;
var start : Transform;

var event : boolean;

function Start () {
	mLerpTimer = 0;
	WanderSpeed = 0.1;
	event = false;
}

function FixedUpdate()
{
	if(event)
	{
		rotationShip();
	}
	
	if( mLerpTimer > 1.5f)
	{
		event = false;
		mLerpTimer = 0;
	}
}
function Update () {
	 
}

function rotationShip()
{
	if(event)
	{
		 var curve : float = AnimCurve.Evaluate(mLerpTimer);
	     shiprotaion.rotation = Quaternion.Slerp(start.rotation, next.rotation, curve);
    }
    mLerpTimer += Time.deltaTime * WanderSpeed;
}
