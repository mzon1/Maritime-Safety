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


var missions : MissionStage2;
var cmp : GameObject;

function Start () {
	state = 0;
	myPos = transform;
	wp1Obj = gameObject.Find("waypoint_01");
	wp2Obj = gameObject.Find("waypoint_02");
	
	waypoints[0] = wp1Obj.transform;
	waypoints[1] = wp2Obj.transform;
	
	cmp = gameObject.Find("complete");
  	missions = cmp.transform.gameObject.GetComponent("MissionStage2");
}

function Update () {	
	if( state == 0)
	{
		if(currentWaypoint != 2)
		{
			walk();
			activeWaypoint = waypoints[currentWaypoint];
		}
		else
		{
			Destroy(this.gameObject);		
		}
	}
	Debug.DrawLine ( myPos.position, activeWaypoint.position, Color.red );	
	
	if(missions.mainissionCheck)
	{
		print("destroy character! (missioncomplet)");
		Destroy(this.gameObject);
	}
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


function OnTriggerEnter( col : Collider )
{
	if( col.gameObject.tag == "waypoint" )
	{
		currentWaypoint++;
	}
}