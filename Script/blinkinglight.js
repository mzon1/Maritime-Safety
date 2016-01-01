#pragma strict

//var duration : float= 1.0;

var randonGenerater : randomTime;

var changeLight : changeLight;

var time : float;
var fixedTime : float;
var change : boolean;
var blinking : float;

var eventTime : float;

var lightevent : boolean;

function Start () {
	randonGenerater =  transform.parent.gameObject.GetComponent("randomTime");
	time = 0;
	fixedTime = 0;
	change = true;
	blinking = 1.0f;
	//eventTime = Random.Range(5, 15);
	lightevent =true;
}

function FixedUpdate () {
	lightevent = changeLight.changeLightvalue;
	eventTime = randonGenerater.randomTime;
	if(lightevent)
	{
		fixedTime += Time.deltaTime;
		if(fixedTime < eventTime)
		{
			blinkingEvent();
		}
		else
		{
			light.intensity = 0.0;
		}
	}
}

function blinkingEvent()
{
	time += Time.deltaTime;
	
	if(time > blinking)
	{
		time = 0;
		change = !change;
		blinking = Random.Range(0.01, 0.2);
	}
	
	if(change)
	{
		light.intensity = 0.3;
	}
	else
	{
		light.intensity = 0.0;
	}

}

/*light Controll
// Pulse light's intensity over time
	var duration : float= 1.0;
	function Update() {
		// argument for cosine
		var phi : float = Time.time / duration * 2 * Mathf.PI;
		// get cosine and transform from -1..1 to 0..1 range
		var amplitude : float = Mathf.Cos( phi ) * 0.5 + 0.5;
		// set light color
		light.intensity = amplitude;
	}
	
	*/