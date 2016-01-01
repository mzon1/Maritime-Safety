var pregBtn : GUIStyle;
var nextBtn : GUIStyle;
var rightBtn : GUIStyle;
var leftBtn : GUIStyle;

var pagefont : GUISkin;

var ljWindow : Texture2D; //방지
var ljWindow2 : Texture2D;//방지2
var ljWindow3 : Texture2D;//방지3

var ljnameload : Texture2D;
var ljnamenormal : Texture2D;

var emWindow : Texture2D; //사례 
var emWindow2 : Texture2D;//사례2

var emnameload : Texture2D;
var emnamenormal : Texture2D;

var ssWindow : Texture2D; //원인 
var ssWindow2 : Texture2D;//원인2
var ssWindow3 : Texture2D;//원인3

var ssnameload : Texture2D;
var ssnamenormal : Texture2D;

var ntWindow : Texture2D; //정의1

var ntnameload : Texture2D;
var ntnamenormal : Texture2D;

var BgWindow : Texture2D; //배경 

var listEx : Texture2D[,];
var listName : Texture2D[,];

var index1 : int = 0;
var index2 : int = 0;

var GameManager : Manager;
var test : GameObject;

var loadingtime : float;

var bgblack : Texture2D;

function Start () {
	

 	listEx = new Texture2D[4,3];
 		
	listEx[2,0] = ljWindow;//방지
	listEx[2,1] = ljWindow2;
	listEx[2,2] = ljWindow3;
	listEx[3,0] = emWindow;//사례
	listEx[3,1] = emWindow2;
	listEx[1,0] = ssWindow;//원인
	listEx[1,1] = ssWindow2;
	listEx[1,2] = ssWindow3;
	listEx[0,0] = ntWindow;//정의
	
	listName = new Texture2D[4,2];
	
	listName[2,0] = ljnameload;
	listName[2,1] = ljnamenormal;
	
	listName[3,0] = emnameload;
	listName[3,1] = emnamenormal;
	
	listName[1,0] = ssnameload;
	listName[1,1] = ssnamenormal;
	
	listName[0,0] = ntnameload;
	listName[0,1] = ntnamenormal;
	
	test = gameObject.Find("GameManager");
  	GameManager = test.transform.gameObject.GetComponent("Manager");
}

function Update () {
	loadingtime += Time.deltaTime;
}

function OnGUI()
{
	GUI.depth = 1.0;
	GUI.skin = pagefont;
	
	if(GameManager.guidisenablegame)
	{
		GUI.color.a = 1.0f;
	}
	else
	{
		GUI.color.a = 0.2f;
	}
	
	GUI.DrawTexture (Rect (0,0,1680,1050), bgblack, ScaleMode.StretchToFill, true, 0 );
	
	GUI.DrawTexture (Rect (0,0,1680,1050), BgWindow, ScaleMode.StretchToFill, true, 0 );
	
	GUI.DrawTexture (Rect (152,166,1378,767), listEx[index1, index2], ScaleMode.StretchToFill, true, 0 );
	
	if(index1 == 0)
	{
		GUI.DrawTexture (Rect (152,92,343,59), listName[0, 0], ScaleMode.StretchToFill, true, 0 );
	}
	else
	{
		GUI.DrawTexture (Rect (152,92,343,59), listName[0, 1], ScaleMode.StretchToFill, true, 0 );
	}
	
	if(index1 == 1)
	{
		GUI.DrawTexture (Rect (502,92,343,59), listName[1, 0], ScaleMode.StretchToFill, true, 0 );
	}
	else
	{
		GUI.DrawTexture (Rect (501,92,343,59), listName[1, 1], ScaleMode.StretchToFill, true, 0 );
	}
	
	if(index1 == 2)
	{
		GUI.DrawTexture (Rect (846,92,343,59), listName[2, 0], ScaleMode.StretchToFill, true, 0 );
	}
	else
	{
		GUI.DrawTexture (Rect (846,92,343,59), listName[2, 1], ScaleMode.StretchToFill, true, 0 );
	}
	
	if(index1 == 3)
	{
		GUI.DrawTexture (Rect (1191,92,343,59), listName[3, 0], ScaleMode.StretchToFill, true, 0 );
	}
	else
	{
		GUI.DrawTexture (Rect (1191,92,343,59), listName[3, 1], ScaleMode.StretchToFill, true, 0 );
	}
	
	/*
	GUI.Label (Rect (151,91,335,61), listName[0, 1]);
	GUI.Label (Rect (501,91,335,61), listName[1, 1]);
	GUI.Label (Rect (845,91,335,61), listName[2, 1]);
	GUI.Label (Rect (1190,91,335,61), listName[3, 1]);
	*/

	if(GameManager.guidisenablegame)
	{
		if(GUI.Button (Rect(152,878,367,75), "", pregBtn))
		{
			index1--;
			index2 = 0;
			if(index1<0)
			{
				index1 =3;
			}
		}
		
		if( GUI.Button (Rect(1161, 878, 367, 75), "", nextBtn))
		{	
			index1++;
			index2 = 0;
			if(index1 > 3)
			{
				index1 = 0;
			}
		}
	}
	else
	{
		GUI.Label  (Rect(152,878,367,75), "", pregBtn);
		GUI.Label  (Rect(1161, 878, 367, 75), "", nextBtn);
	}
	
	GUI.depth = 0.9;
	
	switch(index1)
	{
		case 0 :
			GUI.Label (Rect (810 , 863, 80, 50), 1 + "/" + 1);
			break;
		break;
		case 1 :
			if(GameManager.guidisenablegame)
			{
				if(GUI.Button (Rect(658,863,44,62), "",leftBtn))
				{
					index2--;
					if(index2<0)
					{
						index2 =2;
					}
				}
				
				if( GUI.Button (Rect(979, 863, 42, 62), "", rightBtn))
				{	
					index2++;
					if(index2 > 2)
					{
						index2 = 0;
					}
				}
			}
			
			GUI.Label (Rect (810 , 863, 80, 50), (index2+1) + "/" + 3);
			
		break;
		case 2 :
			if(GameManager.guidisenablegame)
			{
				if(GUI.Button (Rect(658,863,44,62), "", leftBtn))
				{
					index2--;
					if(index2<0)
					{
						index2 =2;
					}
				}
				
				if( GUI.Button (Rect(979, 863, 42, 62), "", rightBtn))
				{	
					index2++;
					if(index2 > 2)
					{
						index2 = 0;
					}
				}
			}
			
			GUI.Label (Rect (810 , 863, 80, 50), (index2+1) + "/" + 3);
			
			break;
		case 3 :
			if(GameManager.guidisenablegame)
			{
				if(GUI.Button (Rect(658,863,44,62), "", leftBtn))
				{
					index2--;
					if(index2<0)
					{
						index2 =1;
					}
				}
				
				if( GUI.Button (Rect(979, 863, 42, 62), "", rightBtn))
				{	
					index2++;
					if(index2 > 1)
					{
						index2 = 0;
					}
				}
			}
			
			GUI.Label (Rect (810 , 863, 80, 50), (index2+1) + "/" + 2);
			break;
		}	
		if(!GameManager.guidisenablegame)
		{
			GUI.Label (Rect(658,863,44,62), "", leftBtn);
			GUI.Label (Rect(979, 863, 42, 62), "", rightBtn);
		}
	
}

