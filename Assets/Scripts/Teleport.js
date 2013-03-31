var target : Transform;
var target2 : Transform;
var target3 : Transform;
 
 
function Update () {
 
}

function OnTriggerEnter (col : Collider) {
 
	if(col.gameObject.tag == "teleport") {

		var randomNumber = Random.Range(0,2);

		if(randomNumber == 0) {
	 		this.transform.position = target.position;
	 	}
	 	if(randomNumber == 1) {
	 		this.transform.position = target2.position;
	 	}
	 	if(randomNumber == 2) {
	 		this.transform.position = target3.position;
	 	}
	  
	}
}