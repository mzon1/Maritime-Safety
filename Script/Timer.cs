using UnityEngine;
using System.Collections;

public class Timer : MonoBehaviour
{
	public int time;
	public GUIText timer;
	
	void Start()
	{
		StartCoroutine (countdown());
	}
	
	IEnumerator countdown()
	{
		while (time > 0)
		{
			yield return new WaitForSeconds(1);
			
			timer.text = time.ToString();
			
			time -= 1;
		}
		
		timer.text = "Blast Off!";
	}
}
