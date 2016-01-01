using UnityEngine;
using System.Collections;

public class GUITimer : MonoBehaviour {

	public float Seconds = 0;
	public float Minutes = 5;
	public float Millise = 0;
	public float MillPre = 0;
	public float clockSpeed = 1.0f;

	public int[] MinuteInt;
	public int[] SecondInt;
	public int[] Milliseint;

	public Texture2D digital1;
	public Texture2D digital2;
	public Texture2D digital3;
	public Texture2D digital4;
	public Texture2D digital5;
	public Texture2D digital6;
	public Texture2D digital7;
	public Texture2D digital8;
	public Texture2D digital9;
	public Texture2D digital0;
	public Texture2D digitalcolon;
	public Texture2D[] digitals;
	// Use this for initialization

	public GameObject manager;
	private Manager gManager;

	void Start () {
		digitals = new Texture2D[10];
		digitals[1] = digital1;
		digitals[2] = digital2;
		digitals[3] = digital3;
		digitals[4] = digital4;
		digitals[5] = digital5;
		digitals[6] = digital6;
		digitals[7] = digital7;
		digitals[8] = digital8;
		digitals[9] = digital9;
		digitals[0] = digital0;

		MinuteInt = new int[2];
		SecondInt = new int[2];
		Milliseint = new int[2];

		manager = GameObject.Find("GameManager");
		gManager = manager.GetComponent<Manager>();
	}


	/*
	msecs += Time.deltaTime * clockSpeed;
	if(msecs >= 1.0f)
	{
		msecs -= 1.0f;
		seconds++;
		if(seconds >= 60)
		{
			seconds = 0;
			minutes++;
			if(minutes > 60)
			{
				minutes = 0;
				hour++;
				if(hour >= 24)
					hour = 0;
			}
		}
	}
	*/
	void OnGUI()
	{
		GUI.DrawTexture (new Rect (105,22,28,46), digitals[MinuteInt[1]], ScaleMode.StretchToFill, true, 0 );
		GUI.DrawTexture (new Rect (133,22,28,46), digitals[MinuteInt[0]], ScaleMode.StretchToFill, true, 0 );

		GUI.DrawTexture (new Rect (161,22,6,46), digitalcolon, ScaleMode.StretchToFill, true, 0 );

		GUI.DrawTexture (new Rect (167,22,28,46), digitals[SecondInt[1]], ScaleMode.StretchToFill, true, 0 );
		GUI.DrawTexture (new Rect (195,22,28,46), digitals[SecondInt[0]], ScaleMode.StretchToFill, true, 0 );

		GUI.DrawTexture (new Rect (233,22,6,46), digitalcolon, ScaleMode.StretchToFill, true, 0 );

		GUI.DrawTexture (new Rect (239,22,28,46), digitals[Milliseint[1]], ScaleMode.StretchToFill, true, 0 );
		GUI.DrawTexture (new Rect (267,22,28,46), digitals[Milliseint[0]], ScaleMode.StretchToFill, true, 0 );
	}

	// Update is called once per frame
	void Update () {
		if(Millise <= 0){
			Millise = 0.99f;
			Seconds --;
			if (Seconds <= 0) {
				Seconds = 59;
				if(Minutes >= 1)
				{
					Minutes--;
				}
				else
				{
					Minutes =0;
					Seconds =0;
					//GameObject.Find("TimerText").guiText.text = Minutes.ToString("f0") + ":0" + Seconds.ToString("f0");
				}
			}
		}
		else
		{
			Millise -= Time.deltaTime * clockSpeed;
		}

		if(Millise <= 0 && Seconds <= 0 && Minutes <= 0)
		{
			gManager.resetGame();
		}

		MillPre = Millise * 100;

		MinuteInt [1] = (int)Minutes / 10;
		MinuteInt [0] = (int)Minutes % 10;

		SecondInt [1] = (int)Seconds / 10;
		SecondInt [0] = (int)Seconds % 10;
		if(MillPre >= 0)
		{
			Milliseint [1] = (int)MillPre / 10;
			Milliseint [0] = (int)MillPre % 10;
		}



		/*
		MillPre = Millise * 100;

		if(Mathf.Round(Seconds) <= 9)
		{
			if(Mathf.Round(MillPre) <= 9)
			{
				GameObject.Find("TimerText").guiText.text = "TIME " + Minutes.ToString("f0") + ":0" + Seconds.ToString("f0") + ":0" + MillPre.ToString("f0");
			}
			else
			{
				GameObject.Find("TimerText").guiText.text = "TIME " + Minutes.ToString("f0") + ":0" + Seconds.ToString("f0") + ":" + MillPre.ToString("f0");
			}
		}
		else
		{
			if(Mathf.Round(MillPre) <= 9)
			{
				GameObject.Find("TimerText").guiText.text = "TIME " + Minutes.ToString("f0") + ":" + Seconds.ToString("f0") + ":0" + MillPre.ToString("f0");
			}
			else
			{
				GameObject.Find("TimerText").guiText.text = "TIME " + Minutes.ToString("f0") + ":" + Seconds.ToString("f0") + ":" + MillPre.ToString("f0");
			}
		}
		*/
	}
}
