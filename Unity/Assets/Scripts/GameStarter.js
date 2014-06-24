#pragma strict

import System.IO;

public var referenceObject: String;
private var ObjectStarter : GameObject;
public var CountrytoGuess : String; 
public var Score : int = 0;




var markers : Markers; 

var path : String = "/Assets/Scripts/SouthAmericaCountries.txt";
var nLines : int;
var rand;
//var randomLine ;




    



function Start () {
	ObjectStarter = GameObject.Find(referenceObject);
	 
	//markers = GetComponent(Markers);
	markers = GameObject.FindObjectOfType(Markers);
	
	
	
	
	nLines = GetNumberOfLines(path);
 /*	for (var i = 0; i < nLines; i++) {
         ReadLine(path, i));
    }
    */
 	rand = Random.Range(0, nLines);
 	CountrytoGuess = ReadLine(path, rand);
 	
 	Debug.Log(CountrytoGuess);
	
	
	
}

function Update () {
	
	if (markers != null ){
		if( (Input.GetKeyDown(KeyCode.D )) ) {
			Debug.Log( markers.getActivated() );
			if ( CountrytoGuess == markers.getActivated() ) {
			Debug.Log("entrou score");
				Score ++;
				Debug.Log(Score);
			}
		}
	}
	else {
	}

}



function ReadLine(path : String, nLine : int) : String
    {
        var reader = new StreamReader(File.Open(path, FileMode.Open)) ;
        var line : String = " ";
        var n : int = 0;
        while (n++ <= nLine)
            line = reader.ReadLine();
        reader.Close();
        return line;
        

    }
 
 
 function GetNumberOfLines(path : String) : int
    {
        var reader = new StreamReader(File.Open(path, FileMode.Open));
        var nLines = reader.ReadToEnd().Split("\n"[0]).Length;
        reader.Close();
        return nLines;
    }