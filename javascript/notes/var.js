"use strict";
const l = console.log; // alias
var sep = "-----";
function section(title){
    l( sep + title + sep + "\n" );
}
function e(){
    l();
}

//-----------------------------------------------------------------------------
// variable scope {{{{{{{ me : i see evreyone but i pick my scope first :D }}}}}}}
section("Scope");
var x = "from global";
var y = "from global";
function ll(){ 
    var x = "from local";
    function fl(){ // local scope : it see var x local and y global
        l( "Call in local function scope :\n   x = " + x);
        l("Call in local function scope :\n   y = " + y);
    }
    fl();   
}
function gl(){ // global scope : it see var x global and y global
    l("Call in global scope :\n   x = " + x);
    l("Call in global scope :\n   y = " + y);
}

l("Two var x declared with same name");
l("One var y declared globally and unique");
gl();
ll();
e();

//-----------------------------------------------------------------------------
// var, defined as a primitive type, are immutable reference ( like a const *p ) 
section("Variable : Immutable reference");
var y = 5;
var x = y;
x = 10;
l("var y = 5;")
l("var x = y;");
l("x = 10;");
l("x not modifying y")
l("   x : " + x + " & y : " + y);
e();

// typeof data in js
section("Data type");
e();
l("Type of 12: " + typeof 12 );
l("Type of 0.12: " + typeof 0.12 );
l("Type of single quote: " + typeof 'asd' );
l("Type of double quote: " + typeof "asdfa" );
l("Type of {} : " + typeof { hello:"me" } );
l("Type of [] : " + typeof [] );
l("Type of true : " + typeof true );
l("Type of function(){} : " + typeof function(){} );
l("Type of undefined : " + typeof undefined);
l("Type of null : " + "..." + typeof null + "?");
e();
l("Null Vs Undefined");
l("null === undefined : return " + (null === undefined ) );
l("null == undefined : return " + ( null == undefined) );
l("So...var x = null -> clear value keep the object type");
l("And...var x = undefined -> clear value and type(prototype)");
e();