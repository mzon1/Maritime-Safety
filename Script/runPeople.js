#pragma strict

private var state = 0;
var waypoints : Transform[];
private var activeWaypoint : Transform;
var currentWaypoint = 0;

private var myPos : Transform;
private var currentSpeed = 0.0;
private var accel = 5.0;
private var rotationDamping = 6.0;

var wp1Obj : GameObject;
var wp2Obj : GameObject;
var wp3Obj : GameObject;
var wp4Obj : GameObject;
var wp5Obj : GameObject;
var wp6Obj : GameObject;
var wp7Obj : GameObject;
var wp8Obj : GameObject;
var wp9Obj : GameObject;
var wp10Obj : GameObject;
var wp11Obj : GameObject;

var missions : MissionStage1;
var cmp : GameObject;

//var dead = false;

//var gameObj : GameObject;

//var deathParticle : GameObject;

function Start () {
	state = 0;
	myPos = transform;
	wp1Obj = gameObject.Find("waypoint_01");
	wp2Obj = gameObject.Find("waypoint_02");
	wp3Obj = gameObject.Find("waypoint_03");
	wp4Obj = gameObject.Find("waypoint_04");
	wp5Obj = gameObject.Find("waypoint_05");
	wp6Obj = gameObject.Find("waypoint_06");
	wp7Obj = gameObject.Find("waypoint_07");
	wp8Obj = gameObject.Find("waypoint_08");
	wp9Obj = gameObject.Find("waypoint_09");
	wp10Obj = gameObject.Find("waypoint_10");
	wp11Obj = gameObject.Find("waypoint_11");
	
	waypoints[0] = wp1Obj.transform;
	waypoints[1] = wp2Obj.transform;
	waypoints[2] = wp3Obj.transform;
	waypoints[3] = wp4Obj.transform;
	waypoints[4] = wp5Obj.transform;
	waypoints[5] = wp6Obj.transform;
	waypoints[6] = wp7Obj.transform;
	waypoints[7] = wp8Obj.transform;
	waypoints[8] = wp9Obj.transform;
	waypoints[9] = wp10Obj.transform;
	waypoints[10] = wp11Obj.transform;

	//gameObj = gameObject.Find("game");
	
	cmp = gameObject.Find("complete");
  	missions = cmp.transform.gameObject.GetComponent("MissionStage1");
}

function Update () {
	//activeWaypoint = waypoints[currentWaypoint];
	//print( activeWaypoint.position );
	//Debug.DrawLine ( myPos.position, activeWaypoint.position, Color.red );
	//var script : HealthBarScript = GetComponent("HealthBarScript");
	
	if( state == 0)
	{
		if(currentWaypoint != 11)
		{
			walk();
			activeWaypoint = waypoints[currentWaypoint];
			//print( activeWaypoint.position );
			//print( activeWaypoint.name );
			//print( currentWaypoint );
		}
		else
		{
			//var script1 : Game = gameObj.transform.gameObject.GetComponent("Game");
			
			//if(script1.baseHealth != 0)
			//{
			//	script1.baseHealth -= 10;
			//}
			//script1.enemiesLeft -= 1;
			//enemySacrafice();
			Destroy(this.gameObject);
			//Destroy(script.healthBarObj);
			//Destroy(script);
			
		}
	}
	Debug.DrawLine ( myPos.position, activeWaypoint.position, Color.red );	
	
	if(missions.mainissionCheck)
	{
		print("destroy character! (missioncomplet)");
		Destroy(this.gameObject);
	}
	/*
	if(dead != true)
	{
		//if(script.currHealth <= 0)
		//{
			//var script2 : Game = gameObj.transform.gameObject.GetComponent("Game");
			//script2.playerWood += 10;
			//script2.playerScore += 1000;
			//script2.enemiesLeft -= 1;
			playDeath();
			dead = true;
		//}
	}
	*/
}

function walk()
{
	var rotation = Quaternion.LookRotation( waypoints[currentWaypoint].position - transform.position );
	
	transform.rotation = Quaternion.Slerp( transform.rotation, rotation, Time.deltaTime * rotationDamping);
	
	var waypointDirection : Vector3 = waypoints[currentWaypoint].position - transform.position;
	
	var speedFactor = Vector3.Dot( waypointDirection.normalized, transform.forward );
	
	var speed = accel * speedFactor;
	
	transform.Translate (0, 0, Time.deltaTime * speed );
}

/*
function playDeath()
{
	state = 1;
	//var animation2 = GetComponentInChildren(typeof(Animation)) as Animation;
	//animation2.animation.Play("death");
	//yield WaitForSeconds(1);
	Destroy(this.gameObject);
	//var script : HealthBarScript = GetComponent("HealthBarScript");
	//Destroy(script.healthBarObj);
	//Destroy(script);
}
*/

function OnTriggerEnter( col : Collider )
{
	if( col.gameObject.tag == "waypoint" )
	{
		currentWaypoint++;
	}
}

/*
function enemySacrafice()
{
	var deathSmoke : GameObject = Instantiate(deathParticle, this.transform.position, this.transform.rotation);
	//Destroy(this.gameObject);
}
*/