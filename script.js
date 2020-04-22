//Cache DOM elements
let gen = document.getElementById("generate");
let result = document.getElementsByName("result");
let type = document.getElementsByName("type");
let resultPlaceholder = document.getElementById("resultText");

//Define Functions
const generateAction = () => {


    //Variables to consider:
    // type of attack: melee, ranged, spell
    // result: hit, miss
    // what caused the hit or miss. Good player move? Poor enemy reaction?
    // Handle this with a fault variable. If it's the players fault on a hit, use a good adjective
    // If it's the players fault on a miss, use the negative adjective

    let situation = generateResult();

    //Use fault and result to determine adjective list

    switch(situation){
        case "player-hit-melee":
            resultPlaceholder.innerHTML= `You ${meleeAction[randGen(meleeAction)]} ${posAdj[randGen(posAdj)]} and ${meleeHit[randGen(meleeHit)]} the monster!`;
            break;
        case "player-hit-ranged":
            resultPlaceholder.innerHTML= `You ${posAdj[randGen(posAdj)]} ${rangedAction[randGen(rangedAction)]} your projectile and ${rangedHit[randGen(rangedHit)]} the monster!`;
            break;
        case "player-hit-spell":
            resultPlaceholder.innerHTML= `You ${posAdj[randGen(posAdj)]} ${spellAction[randGen(spellAction)]} your spell and ${spellHit[randGen(spellHit)]} the monster with your magic!`;
            break;
        case "mob-hit-melee":
            resultPlaceholder.innerHTML= `You ${meleeAction[randGen(meleeAction)]} and the monster tries to  ${defenseAction[randGen(defenseAction)]} ${negAdj[randGen(negAdj)]}- You ${meleeHit[randGen(meleeHit)]} the monster!`;
            break;
        case "mob-hit-ranged":
            resultPlaceholder.innerHTML= `You ${rangedAction[randGen(rangedAction)]} your projectile and the monster tries to  ${defenseAction[randGen(defenseAction)]} ${negAdj[randGen(negAdj)]}- You ${rangedHit[randGen(rangedHit)]} the monster!`;
            break;
        case "mob-hit-spell":
            resultPlaceholder.innerHTML= `You ${spellAction[randGen(spellAction)]} your spell and the monster tries to  ${defenseAction[randGen(defenseAction)]} ${negAdj[randGen(negAdj)]}- You ${spellHit[randGen(spellHit)]} the monster with your magic!`;
            break;

        case "player-miss-melee":
            resultPlaceholder.innerHTML= `You ${meleeAction[randGen(meleeAction)]} ${negAdj[randGen(negAdj)]}. You ${meleeMiss[randGen(meleeMiss)]} the monster!`;
            break;
        case "player-miss-ranged":
            resultPlaceholder.innerHTML= `You ${negAdj[randGen(negAdj)]} ${rangedAction[randGen(rangedAction)]} your projectile. You ${rangedMiss[randGen(rangedMiss)]}!`;
            break;
        case "player-miss-spell":
            resultPlaceholder.innerHTML= `You try to ${negAdj[randGen(negAdj)]} ${spellAction[randGen(spellAction)]} your spell, and ${spellMiss[randGen(spellMiss)]}!`;
            break;
        case "mob-miss-melee":
            resultPlaceholder.innerHTML= `You ${meleeAction[randGen(meleeAction)]} and the monster ${defenseAction[randGen(defenseAction)]}s ${posAdj[randGen(posAdj)]}- You ${meleeMiss[randGen(meleeMiss)]} the monster!`;
            break;
        case "mob-miss-ranged":
            resultPlaceholder.innerHTML= `You try to ${rangedAction[randGen(rangedAction)]} your projectile, but the monster ${defenseAction[randGen(defenseAction)]}s ${posAdj[randGen(posAdj)]}. You ${rangedMiss[randGen(rangedMiss)]}!`;
            break;
        case "mob-miss-spell":
            resultPlaceholder.innerHTML= `You try to ${spellAction[randGen(spellAction)]} your spell, but the monster ${defenseAction[randGen(defenseAction)]}s ${posAdj[randGen(posAdj)]}. You ${spellMiss[randGen(spellMiss)]}!`;
            break;
    }
}

const generateResult = () => {
   
   //1: Determine Fault
   let cause = "";
    let fault = Math.floor(Math.random()*2);
    if(fault){
        cause = "player";
    }
    else{
    cause = "mob";}
   
    //2: Determine Hit / Miss
    let actionResult = ""; 
    for (item in result){
        if(result[item].checked){
            actionResult = result[item].value;
        }
    }

    //3: Determine Attack Type
    let attackType = "";
    for (item in type){
        if(type[item].checked){
            attackType = type[item].value;
        }
    }

    return `${cause}-${actionResult}-${attackType}`;
}

//Randomly generate index based on type
const randGen = type => {
    return Math.floor((Math.random() * type.length));
}

const checkBox = (event) =>{
    alert("Checked!");
}

gen.addEventListener("click", generateAction);


let meleeAction = [
    "charge",
    "dive",
    "feint",
    "gain ground",
    "grasp",
    "hook to the side",
    "lunge",
    "jump",
    "lash out",
    "launch",
    "leap",
    "mimick your target",
    "mirror your target",
    "overpower the monster",
    "rear to full height",
    "seize",
    "slam",
    "spin",
    "spring",
    "surge",
    "stalk",
    "stomp",
    "stretch",
    "swagger up to the monster",
    "stride",
    "swoop",
    "taunt",
    "throttle",
    "unleash your strength",
    "assault your target",
    "attack",
    "bash",
    "bludgeon",
    "carve down",
    "hack away",
    "chop",
    "cleave about",
    "club",
    "jab",
    "kick",
    "knock",
    "plant",
    "punch",
    "shove",
    "slice",
    "smash",
    "stab",
    "strike",
    "sweep",
    "swipe",
    "swing",
    "thrust",
    
]

let rangedAction = [
    "fire",
    "fling",
    "heave",
    "hurl",
    "shoot",
    "throw",
    "send a barrage of",
    "attack",
    "let loose",
    "let fly",
    "shoot",
    "blast",
    "launch",
    "open fire",
    "bombard",
    "project",
    "open up",
    "set off",
    "loose",
    "dispatch",
    "pitch",
    "cast",
    "let loose",
    "dispatch",
    "pitch",
    "drive",
    "send forth",
]

let spellAction = [
    "cast",
    "let loose",
    "blast",
    "discharge",
    "dispatch",
    "pitch",
    "lance",
    "drive",
    "fling",
    "fire",
    "heave",
    "hurl",
    "throw",
    "send forth",
    "set in motion",
]

let posAdj = [
    "swiftly",
    "gracefully",
    "honorably",
    "skillyfuly",
    "deftly",
    "elegantly",
    "second naturedly",
    "quickly",
    "aptly",
    "practicedly",
    "expertly",
    "hastily",
    "promptly",
    "quickly",
    "rapidly",
    "fleetly",
    "delicately",
    "easily",
    "neatly",
    "nimbly",
    "smoothly",
    "beautifully",
    "dextrously",
    "exquisitely",
    "accurately",
    "aptly",
    "cleanly",
    "efficiently",
    "methodically",
    "precisely",
]

let negAdj = [
    "clumsily",
    "poorly",
    "dazedly",
    "sluggishly",
    "slowly",
    "unskillfuly",
    "novicely",
    "blindly",
    "carelessly",
    "lethargicly",
    "dopily",
    "stiffly",
    "casualy",
    "gently",
    "nonchalantly",
    "leisurely",
    "awkwardly",
    "stumblingly",
    "gawkily",
    "fumblingly",
    "gracelessly",
    "inelegantly",
    "ineptly",
    "lumberingly",
    "ungracefully",
]

let meleeHit = [
    "gore",
    "clip",
    "cut",
    "dice",
    "impale",
    "pierce",
    "skewer",
    "bloody",
    "carve through",
    "castrate",
    "crush",
    "destroy",
    "disfigure",
    "dismember",
    "grind",
    "gut",
    "hammer",
    "maim",
    "mangle",
    "maul",
    "perforate",
    "plow",
    "puncture",
    "rend",
    "riddle",
    "saw through",
    "smack",
    "spatter",
    "sunder",
    "whack",
    "amputate a limb off",
    "collide forcefully with",   
]

let rangedHit = [
    "gore",
    "clip",
    "cut",
    "impale",
    "pierce",
    "skewer",
    "bloody",
    "destroy",
    "disfigure",
    "dismember",
    "gut",
    "hammer",
    "maim",
    "mangle",
    "maul",
    "perforate",
    "plow through",
    "puncture",
    "rend",
    "riddle",
    "saw through",
    "smack",
    "spatter",
    "collide with",   
    "embed",
    "wedge",
    "clip",
    "impale",
    "pierce",
    "plant",
    "skewer",
]

let spellHit = [
    "gore",
    "cut",
    "dice",
    "bloody",
    "carve through",
    "castrate",
    "crush",
    "destroy",
    "disfigure",
    "dismember",
    "gut",
    "hammer",
    "maim",
    "mangle",
    "maul",
    "plow",
    "rend",
    "riddle",
    "saw through",
    "smack",
    "spatter",
    "sunder",
    "whack",
    "burn",
    "frost",
    "cauterize",
    "concuss",
    "combust",
    "daze",
    "dazzle",
    "deafen",
    "disintegrate",
    "electrocute",
    "freeze",
    "fuse flesh",
    "incinerate",
    "melt",
    "petrify",
    "shock",
]

let defenseAction = [
    "avoid",
    "block",
    "counter",
    "dance away",
    "dart",
    "dash",
    "deflect",
    "deny",
    "dip",
    "dive",
    "dodge",
    "duck",
    "evade",
    "feint",
    "fend off",
    "flee",
    "grasps at the blow",
    "lunge",
    "jump",
    "launch",
    "leap",
    "mimick",
    "mirror",
    "mock",
    "negate",
    "parry",
    "protect",
    "return the blow",
    "retreat",
    "pulls",
    "saunter",
    "shield",
    "sidestep",
    "spin",
    "spring back",
    "step back",
    "stretch away",
    "suppress",
    "take cover",
    "twist",
    "twirl",
    "withdraw",
]

let meleeMiss = [
    "swing helplessly at",
    "stumble at",
    "whiff your attack towards",
    "gaze hopelessly at",
    "tumble in fear away from",
    "pat",
    "caress",
    "gently touch",
    "fail to attack",
    "learn a thing or two about",
    "miss",
    "blunder your attack at",
    "make a critical judment error and miss",
    "mistake the range and miss",
    "slip and miss",
    "fall down and miss",
    "flounder your attack towards",
    "hesitate for too long and rethink your attack towards",
    "waver towards",  
]

let rangedMiss = [
    "whiff your attack",
    "gaze hopelessly at the monster",
    "tumble in fear, missing the monster",
    "misjudged your shot and miss",
    "fail to hit",
    "completely miss",
    "learn a thing or two",
    "miss",
    "blunder your attack",
    "make a critical judment error and miss",
    "mistake the range and miss",
    "slip and miss",
    "fall down and miss",
    "flounder your attack",
    "hesitate for too long and miss",
    "get something in your eye and blink uncontrollably. You miss",
    "decide you rather quite fancy the monster",
    "have a surge of empathy for the monster",
    "become soft and miss",
    "become weak and miss",
    "shoot a poorly aimed shot. You miss",
    "purposely miss your shot"
]

let spellMiss = [
    "whiff your attack",
    "gaze hopelessly at the monster",
    "tumble in fear",
    "misjudge and send your spell far away from the monster",
    "fail to attack",
    "learn a thing or two",
    "miss",
    "blunder your spell",
    "make a critical judment error and miss",
    "mistake the range and miss",
    "slip and miss",
    "fall down and miss",
    "flounder your attack",
    "hesitate for too long and miss",
    "get something in your eye and blink uncontrollably, missing the monster",
    "decide you rather quite fancy the monster",
    "have a surge of empathy towards the monster",
    "become soft and miss",
    "become weak and miss",
    "cast a poorly aimed spell and miss",
    "purposely miss your shot",
    "don't put enough energy into your spell. You miss",
]