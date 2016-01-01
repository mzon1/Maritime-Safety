#pragma strict


function Start () {

}

function FixedUpdate () {
	transform.Rotate(0, Time.deltaTime*720, 0); 
}