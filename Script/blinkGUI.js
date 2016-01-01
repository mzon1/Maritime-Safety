private var blink = false;
var btime : float;
 public var yourGUITexture:Texture2D;
 
 function Update()
 {

	btime += Time.deltaTime;
	btime -= Time.deltaTime;
 }
 
 function OnGUI()
 {

	GUI.color.a = 1.0f;

    GUI.Label (Rect (810 , 863, 80, 50), yourGUITexture);

} 