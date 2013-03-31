var curHealth : int = 100;
var maxHealth : int = 100;

var curXp : int = 0;
var maxXp : int = 500;
var level : int = 1;

var healthtext : GUIText;
var xpText : GUIText;
var levelText : GUIText;
 
function Start () {
	healthRegen();
}
 
function Update () {
	 
	healthtext.text = "HP: " + curHealth + " / " + maxHealth;

	xpText.text = "XP: " + curXp + " / " + maxXp;

	levelText.text = "Level: " + level;

	if(curXp == maxXp){
		levelUpSystem();
	}
	else if(curXp >= maxXp){
		levelUpSystem();
	}
	if(Input.GetKeyDown("r")) {
		curXp += 100; 
	}

	if(curHealth < 0 ) {
		curHealth = 0;
	} 
	if(curHealth > maxHealth) {
		curHealth = maxHealth;
	}
	if(Input.GetKeyDown("e")) {
		curHealth -= 10; 
	} 
}

function healthRegen () {
 
	for(i=1;i>0;i++) {
		yield WaitForSeconds(0.5); 
		if(curHealth < maxHealth) { 
			curHealth++;
		}	 
	} 
}

function levelUpSystem () {
	var extraXp = maxXp * 0.05;
	var extraHp = maxHealth * 0.10;
	curXp = 0;
	maxXp = maxXp + extraXp;
	maxHealth = maxHealth + extraHp;
	level++;
}