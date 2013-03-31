var bouncespeed : float = 0.002f;

var waitForSeconds : float = 0.8f;
 
var itemBounceUp = true;

 
 
 
 
function Start() {
 
 
itembounce();
 
 
}
 
 
 
 
 
 
 
function Update () {
 
 
 
if(itemBounceUp == true) {
 
this.transform.position.y += bouncespeed;
 
 
}
 
else if(itemBounceUp == false) {
 
this.transform.position.y -= bouncespeed;
 
 
}
 
 
}
 
 
 
function itembounce () {
 
for(i=1;i>0;i++) {
 
 
 
yield WaitForSeconds(waitForSeconds);
 
itemBounceUp = false;
 
yield WaitForSeconds(waitForSeconds);
 
itemBounceUp = true;
 
}
 
 
 
 
}