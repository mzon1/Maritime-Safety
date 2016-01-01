#pragma strict

var boat : GameObject;
var raft1 : GameObject;
var raft2 : GameObject;
var raft3 : GameObject;
var raft4 : GameObject;

var check : boolean;

function Start () {
	check = false;
}

function Update () {

}

function OnTriggerEnter(other : Collider)
{
	if(other.gameObject.tag == "Player")
	{
		print("kong!");
		//if(!check)
		//{
			raft3.rigidbody.useGravity = true;
			yield WaitForSeconds(0.2);
			raft4.rigidbody.useGravity = true;
			yield WaitForSeconds(0.1);
			boat.rigidbody.useGravity = true;
			yield WaitForSeconds(0.3);
			raft2.rigidbody.useGravity = true;
			yield WaitForSeconds(0.2);
			raft1.rigidbody.useGravity = true;
			check = true;
		//}
				
	}
}