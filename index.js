//how to make a simple message generator?


//every sentence

const subjectPronouns = ['I','You','He','She','It','We','They'];
const verbs = ['jump', 'eats','run', 'sleeps','smell','touches','think']
const objects = ['Ganymede', 'apples','oranges', 'Goku', 'sky']


function randomNumberGenerator(num){
   return Math.round(Math.random() * num);
}

function randomSubjectPronounGenerator(num){
    return subjectPronouns[num];

}

function randomVerbGenerator(num){
    return verbs[num];

}

function randomObjectGenerator(num){
    return objects[num];

}

function generateMxdMsg(){
    const subject = randomSubjectPronounGenerator(randomNumberGenerator(subjectPronouns.length-1));
    const verb = randomVerbGenerator(randomNumberGenerator(verbs.length-1))
    const object = randomObjectGenerator(randomNumberGenerator(objects.length-1))
   return `${subject} ${verb} ${object}.`;
}

console.log(generateMxdMsg())

