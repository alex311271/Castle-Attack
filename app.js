const attacker = {
	archer: 30,
	footSoldier: 55,
	cavalry: 10,
	artillery: 3,

  checkChancesToWin(defenderObject){
  let ourArmyChances = [0, 0];
  const keys = Object.keys(defenderObject)
  ourArmyChances[1] = keys.length
  if(defenderObject.footSoldier < this.footSoldier) ourArmyChances[0] += 1
  if(defenderObject.archer < this.archer) ourArmyChances[0] += 1
  if(defenderObject.cavalry < this.cavalry)ourArmyChances[0] += 1
  if(defenderObject.artillery < this.artillery)ourArmyChances[0] += 1
  return ourArmyChances;
},

  improveArmy(){
  this.archer += 5;
  this.footSoldier += 5;
  this.cavalry += 5;
  this.artillery += 5;
},

  attack(defenderObject){
  
  const chancesToWin =
		(this.checkChancesToWin(defenderObject)[0] /
			this.checkChancesToWin(defenderObject)[1]) * 100
  if (chancesToWin < 70) {
		alert(
			`Наши шансы равны ${this.checkChancesToWin(defenderObject)[0]}/${
				this.checkChancesToWin(defenderObject)[1]
			}. Необходимо укрепление!`
		)
	} else {
		alert(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`)
	}
    this.improveArmy();
},

  };


const defender = {
	archer: 33,
	footSoldier: 50,
	cavalry: 40,
	artillery: 10,
};

attacker.attack(defender)
attacker.attack(defender)
attacker.attack(defender)