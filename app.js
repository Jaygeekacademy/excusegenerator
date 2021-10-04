//// CONSTANT VARS
const who = ['The dog','My grandma','His turtle','My bird'];
const action = ['ate','peed','crushed','broke'];
const what = ['my homework', 'the keys', 'the car'];
const when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];



const type1 = function(){
const who1 = Math.floor(Math.random()*who.length)
const action1 = Math.floor(Math.random()*action.length)
const what1 = Math.floor(Math.random()*what.length)
const when1 = Math.floor(Math.random()*when.length)

return who[who1]+ ` ` + action[action1]+` `+ what[what1] +` `+ when[when1]

}

document.querySelector("#excuse").innerHTML = type1()