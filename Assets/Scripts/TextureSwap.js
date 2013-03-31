var texture1 : Texture2D;
var texture2 : Texture2D;
var wait : float = 0.5f;

function Start() {
	changeTexture();
}
 
 
function Update () {}
 
function changeTexture () {
	 
	for(i=1;i>0;i++) {
	 
		yield WaitForSeconds(wait);
		 
		renderer.material.mainTexture = texture1;
		 
		yield WaitForSeconds(wait);
		
		renderer.material.mainTexture = texture2;
		 
	}
 
}