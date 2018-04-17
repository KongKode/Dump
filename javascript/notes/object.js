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
// Object declaration 1
section("Object declaration");
var o = new Object();
o.name = "kev";
o.lastname = "bacon";
o.hi = function(){
    l("   hi " + o.name + " " +o.lastname);
}
// Object declaration 2
var o2 = {};
o2["name"] = "mat";
o2["lastname"] = "bacon";
o2["hi"] = function(){
    l("   hi " + o2.name + " " +o2.lastname);
};
// Object declaration 3
var o3 = {
    name : "mandy",
    lastname : "bacon",
    hi : function(){ 
        l("   hi " + this.name + " " +this.lastname)
        l( this.name + " has a nested object baby as json format :\n" +"   " + JSON.stringify( this.baby) );
    },
    baby : {
        name : "baby",
        lastname : "bacon"
    }
};

l("3 declared object saying hi with their name");
o.hi();
o2.hi();
o3.hi();
e();

//-----------------------------------------------------------------------------
// Object are mutable
section("Object : Mutable reference");
var o1 = {};
var o2 = o1;
o2.test = "test";
l("Adding a test variable to o2 when o2 = o1.");
l("   o1 : " + JSON.stringify(o1)); // both are same
l("   o2 : " + JSON.stringify(o2)); // both are same
e();

// so we can push whatever we want to the same shared ref
section("Object : Shared reference");
o2.table = [];
var x = o2.table;
x.push(1);
l("Pushing value to x when x = o2.table and table = [].")
l("   o1 : " + JSON.stringify(o1)); // both are same
l("   o2 : " + JSON.stringify(o2)); // both are same
e();

//-----------------------------------------------------------------------------
// Reference and this
section("Reference");
var ref = o;
ref.newHi = function(){ l( "   hi from a new var created by ref" );}
l("When ref = object and ref.foo = function...");
l("Call from object = " );
o.newHi();
e();

// this refer to the parent object processing the exection
section("This");
ref.hiperson =  function(){ l( "   hi to this person : " + this.name + " " + this.lastname );}
l("Using 'this' can access parent scope :");
o.hiperson();
e();
// like this in global scope refer to window(browser) or global context(node see exports)
l("'this' from node global ");
l(this);
l("'this' from browser ");
l("window");
l("'this' from object ");
o.logme = function(){ l( this );}
o.logme();
e();


