using UnityEngine;
using System.Collections;

public class BlurControl : MonoBehaviour {

	BlurEffect myBlur;
	double timeBlur;

	// Use this for initialization
	void Start () {
		timeBlur = 5.0;
		myBlur = this.GetComponent<BlurEffect> ();
	}
	
	// Update is called once per frame
	void Update () {
		timeBlur -= Time.deltaTime;
		myBlur.iterations = (int)timeBlur;
	}
}
