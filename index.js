function dwarfRollCall(dwarves) {
  for(let i=0;i<dwarves.length;i++){
   dwarves.push(`${i+1}.${dwarves[i]}`)
  }
  return dwarves;
}

function summonCaptainPlanet(planeteerCalls){
  for (let i=0;i<planeteerCalls.length;i++){
    `${planeteerCalls[i].toUpperCase()}`
  }
  return `${planeteerCalls.join("!")}`
}

function longPlaneteerCalls(words) {
  for (let i=0; i<words.length; i++){
    if(words[i].length<4){
      return true;
    }
    return false;
  }
}

function findTheCheese (foods) {
  for(let i=0;i<foods.length;i++){
    if (foods[i]===gouda){
      return `gouda`
    }else if(foods[i]===cheddar){
      return `cheddar`
    }else{
      return `no cheese!`
    }
  }
}
