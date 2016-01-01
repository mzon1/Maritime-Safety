#pragma strict

var myTimer : float = 5.0;

function Update () {
 if(myTimer > 0){
  myTimer -= Time.deltaTime;
 }
 if(myTimer <= 0){
  Debug.Log("GAME OVER");
 }
}

function OnGUI () {
    GUI.Label (Rect (10,10,150,100), (myTimer.ToString() + " : " + myTimer.ToString()));
}