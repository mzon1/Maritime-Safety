#pragma strict

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
	renderer.material.shader = Shader.Find ("Particles/Additive");
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
			renderer.material.shader = Shader.Find ("Diffuse");
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
		renderer.material.shader = Shader.Find ("Particles/Additive");
	}
	else
	{
		renderer.material.shader = Shader.Find ("Diffuse");
	}

}

/*shader controll
// Create a material from code
	function Start () {
		// Create a material with transparent diffuse shader
		var material = new Material (Shader.Find ("Transparent/Diffuse"));
		material.color = Color.green;
		// assign the material to the renderer
		renderer.material = material;
	}
*/