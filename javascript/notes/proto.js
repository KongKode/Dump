"use strict";
const l = console.log; // alias
var sep = "-----";
function section(title){
    l( sep + title + sep + "\n");
}
function e(){
    l();
}

//-----------------------------------------------------------------------------
// Function prototype
section("Function prototype");
var person = {
    name: "John",
    lastname: "Dirt"
};
var speaker = {
    name: "Talk",
    lastname: "Johnson",
    talkto : function(msg){
        l(msg + " " + this.name + " " + this.lastname);
    }
}
/// Bind return a function. can be used later on.
var functioncalltoperson = speaker.talkto.bind(person, "   Bind hello to");
l("Two object; speaker.talko binded on John");
l("   person" , person);
l("   speaker" ,speaker);
functioncalltoperson();
e();

// Apply call with an array as arg
var arr = ["   Apply hello to"];
speaker.talkto.apply(person, arr );
l("   person" , person);
l("   speaker" ,speaker);
e();
// Call call on..
speaker.talkto.call(person,"   Call hello to");
l("   person" , person);
l("   speaker" ,speaker);
e();

//-----------------------------------------------------------------------------
// Function arrow
// bind the function to 
section("Arrow function");
l("Person object function with 'this' as global scope");
person.hi = ()=> { l("   hi " + this.name + " " + this.lastname); }
person.hi();
e();

//-----------------------------------------------------------------------------
// Fist class function
// map filter reduce 
section("Map");
l("An Array.prototype.map() : [0,1,2,3] +=1");
var a = [0,1,2,3];
function plusone(x){
    return x+1;
}
l(plusone(3));
a.map(plusone);
l(a);
e();

