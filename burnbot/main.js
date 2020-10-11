const audio = new Audio('sounds/calculating_noise.mp3'); 

const verb_list1 = ['end your life', 'shut up', 'kill your self'];
const verb_list2 = ['go eat a', 'suck a', 'consume a', 'rub a'];
const nsfwverb_list1 = ['sit n\' spin', 'go fuck yourself'];
const adj = ['gay', 'dumb', 'stupid', 'retarded', 'mundane', 'vapid', 'repugnant', 'unkept'];
const nouns = ['cheese', 'pickle', 'idiot', 'baby', 'loser', 'nerd', 'dweeb', 'virgin'];
const nsfwnouns = ['shitbrain', 'cockwaffle', 'dick', 'ass-face', 'simp', 'slut', 'whore'];
const NSFWadj = ['cum-filled', 'dick-like', 'shit-headed', 'ass-brained', 'slutty', 'damned']
let insult;
var noun;
var isverb2;

let fadj;
let sadj;
let noun2;

function choose(choices) {
	var index = Math.floor(Math.random() * choices.length);
	return choices[index];
}

function isVowel(char) {
  if (char.length == 1) {
    var vowels = new Array("a", "e", "i", "o", "u");
    var isVowel = false;

    for (e in vowels) {
      if (vowels[e] == char) {
        isVowel = true;
      }
    }

    return isVowel;
  }
}

function calculate(){
	audio.play();
	var isNSFW;
    isNSFW = document.getElementById("nsfw").checked;
	noun = '';
	insult = '';
	fadj = '';
	sadj = '';
	noun2 = '';

    isverb2 = choose([1,2,3,4,5]);
    


	if (isverb2 == 3) {
        insult += choose(verb_list2);
    if (isNSFW){
        if (choose([1,2,3]) == 2){
            noun = choose(nsfwnouns);
        }
        else {
            noun = choose(nouns);
        }
    }
    else {
        noun = choose(nouns);
    }    
        
		if (isVowel(noun.charAt(0))) {
			insult += 'n ';
		}
        else {
            insult += ' ';
        }
		insult += noun;
	}
	else {
		insult += choose(verb_list1);
	}
	insult += ' you ';
	if (choose([1,2])==2) {
		if (isNSFW){
            if (choose([1,2,3])==2){
                fadj = choose(NSFWadj);
            }
            else {
                fadj = choose(adj);
        }}
    if (isNSFW==false && fadj == ''){fadj = choose(adj);}

		insult += fadj;
		insult += ', ';
	}

    if (choose([1,2])==2) {
		if (isNSFW){
            if (choose([1,2,3])==2){
                sadj = choose(NSFWadj);
            }
            else {
                sadj = choose(adj);
        }}
    if (isNSFW==false && sadj == ''){sadj = choose(adj);}

}
var sadj1 = sadj;
	while (sadj == fadj){
		    if (choose([1,2])==2) {
		if (isNSFW){
            if (choose([1,2,3])==2){
                sadj = choose(NSFWadj);
            }
            else {
                sadj = choose(adj);
        }}}
    if (isNSFW==false && sadj == sadj1){sadj = choose(adj);}

}
	

	insult += sadj;
	    if (choose([1,2])==2) {
		if (isNSFW){
            if (choose([1,2,3])==2){
                noun2 = choose(nsfwnouns);
            }
            else {
                noun2 = choose(nouns);
        }}
    if (isNSFW==false && noun2 == ''){noun2 = choose(nouns);}

}
var noun21 = noun2;
	while (noun2 == noun) {
	    if (choose([1,2])==2) {
		if (isNSFW){
            if (choose([1,2,3])==2){
                noun2 = choose(nsfwnouns);
            }
            else {
                noun2 = choose(nouns);
        }}}
    if (isNSFW==false && noun2 == noun21){noun2 = choose(nouns);}

}
	
	insult += ' ';
	insult += noun2;
	insult += '!';





	document.querySelector('#insult').innerHTML = insult;
	

}

