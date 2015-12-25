/// <reference path="D:\GitHub\TypeScriptWebinar\TypeScriptWebinar\TypeScriptWebinar\underscore.js" />
/*var Person = {
    name: 'Bora',
    SurName: 'Kasmer',
    Sex: 'Male',
    Parent: {
        Mother: 'Ozlem',
        Father: 'Erdinc',
        TCNO:12344
    }
}

WriteName();
console.log(say);
function WriteName()
{
    console.log(Person.name + ' ' + Person.SurName);
}
var say = 'Wellcome To Webinar';
*/
/*
function b()
{
    var myVar;
    console.log(myVar);
}
function a()
{    
    console.log(myVar);
    //var myVar;
    b();
}

var myVar = 1;
a();
console.log(myVar);
*/
/*
function a()
{
    function b()
    {
        console.log(myVar);
    }
    myVar = 2;
    b();
}
var myVar = 1;
a();
b();
*/
/*
function waitThreeSeconds()
{
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) { }
    console.log("Action Finished");
}
function clickHandler()
{
    console.log('click event!');
}

document.addEventListener('click', clickHandler);
waitThreeSeconds();
console.log('Finish Execution');
*/
/*
var a;
a = "";
a = 0;
a = "OK";
a = 1;
if (a) { console.log("It is working");}
*/
/*
console.log(null || 1);
console.log(false || true);
console.log(null || "Hello");
console.log("abc" || "def");
*/
/*
function Hello(name)
{
    var name = name || 'Bora';
    console.log("Hello " + name);
}
Hello();
Hello('Duru');
Hello(0);
*/
/*
var callFunction = function (a)
{
    console.log(a);
}
callFunction.Name = 'Bora Kasmer';
callFunction(5);
console.log(callFunction.Name);
*/
/*
var callFunction = function (a)
{
    a();
}

callFunction(function () {
    var webinar = {
        Unit: 'Javascript',
        Speaker: 'Bora KAŞMER'
    }
    console.log(webinar.Speaker);
    console.log(webinar.Unit);
});
*/
/*
var b = function () {
    console.log(this);
}
var c = {
    name: 'First Name',
    log: function () {
        var self = this;
        this.name = 'C object name Updated';
        console.log(this);

        var updateIsim = function (_name)
        {
            console.log(this);
            //this.name = _name;
            self.name = _name;
        }
        updateIsim('Bora');
        console.log(this);
    }
}
//b();
c.log();
console.log(this);
*/
/*
function record(name, surname, lang)
{
    lang = lang || 'en';
    if (arguments.length === 0)
    {
        console.log(lang);
        console.log("There is no Parameters");
    }
    else if (arguments.length == 2)
    {
        console.log(arguments[1]);
    }
}

record();
record('Bora', 'Kasmer');
*/
/*
var prm = 'Bora';
var hello = function (name) {
    return ("Hello " + name);
}(prm);
console.log(hello);
*/
/*
var name = 'Bora';
(function (name) {
    var say = 'Hello';
    console.log(say + ' ' + name);
})(name);
*/
/*
var say = 'Hello People';
(function (global, name) {
    //window.say = 'Hey ';
    var say = 'Hello';
    console.log(say + ' ' + name);
})(window, 'Bora');
console.log(say + ' Bora');
*/
/*
function hello(name)
{
    return function (say) {
        console.log(name + ' ' + say);
    }
}
hello('Bora ')('hello');

var say = hello('Bora');
say('Webinar soo good');
*/
/*
function buildFunction() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
                function () {
                    console.log(i);
                });
    }
    return arr;
}
var fs = buildFunction();
fs[0]();
fs[1]();
fs[2]();
*/
/*
function buildFunction()
{
    var arr = [];
    for (var i = 0; i < 3; i++)
    {        
        arr.push(
                function (j) {
                    return function () {
                        console.log(j);
                    }
                }(i));
    }
    return arr;
}
var fs = buildFunction();
fs[0]();
fs[1]();
fs[2]();
*/
/*
var say = 'Bora';
function DoIt(callBack) {
    callBack();
}
DoIt(function () {
    console.log('This is done');
});
DoIt(function () {
    setTimeout(function () {
        console.log('Timer finish ' + say);
    }, 3000)
});
*/
/*
var Person = {
    name: 'Bora',
    surName: 'Kasmer',
    getFullName: function () {
        var name = this.name + ' ' + this.surName;
        return name;
    }
}

var logName = function (lang1, lang2)
{
    console.log("Log:" + this.getFullName());
    console.log("Arguments:" + arguments[0] + ' ' + (arguments[1] ||'en'));
}
*/
/*
//a Bind
var logPerson = logName.bind(Person);
logPerson('tr');

//b call
logName.call(Person, 'tr', 'en');
logName.apply(Person, ['tr', 'en']);
*/
/*
var person2 = {
    name:'Duru',
    surName: 'Kasmer'
}
console.log(Person.getFullName.apply(person2));
*/
/*
function multiple(a, b)
{
    console.log('a:' + a);
    console.log('b:' + b);
    console.log(a*b);
}

var multipleClass = multiple.bind(this, 2);
multipleClass(4);
*/
/*
var arr1 = [1, 2, 3];
console.log(arr1);
var arr2 = [];
for (var i = 0; i < arr1.length; i++)
{
    arr2.push(arr1[i]);
}
console.log(arr2);
*/
/*
var arr1 = [1, 2, 3];
function mapForEveryItem(arr, fn)
{
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }
    return newArr;
}
arr2 = mapForEveryItem(arr1, function (item) {
    return item * 2;
});
console.log(arr2);

arr3 = mapForEveryItem(arr1, function (item) {
    return item > 2;
});
console.log(arr3);

var checkPastLimit = function (limit, item)
{
    return item > limit;
}
var arr4 = mapForEveryItem(arr1, checkPastLimit.bind(this, 2));
console.log(arr4);

function checkPastLimitSimple(limit)
{
    return function (limit, item) {
        return item > limit;
    }.bind(this, limit);
}

var arr5 = mapForEveryItem(arr1, checkPastLimitSimple(3));
console.log(arr5);
*/
/*
var Person = {
    firstName: 'Bora',
    lastName: 'KAŞMER',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}
var secil = {
    firstName: 'Secil',
    //lastName:'xxxxx'
}
secil.__proto__ = Person;
console.log(secil.getFullName());
for (prop in secil)
{
    if (secil.hasOwnProperty(prop))
    {
        console.log(prop + ":" + secil[prop]);
    }
}

var duru = {
    TcNo:1212121
}
_.extend(duru, Person, secil);
console.log(duru);
_.extend(duru, secil, Person);
console.log(duru);
*/
/*
var arr = [1, 2, 3];
var newArr = _.map(arr, function (item) { return item * 3 });
console.log(newArr);

var arrDouble = _.filter([1, 2, 3, 4, 5, 6, 7, 8], function (item) { return item % 2 == 0 });
console.log(arrDouble);
*/
/*
function Person(firstName,lastName) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    console.log("Function trigerd");
}
var Bora = new Person('Bora','Kasmer');
console.log(Bora);
var Duru = new Person('Duru', 'Baby');
console.log(Duru);

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}
console.log(Bora.getFullName());
*/
/*
String.prototype.isLengthGreaterThan = function (limit)
{
    return this.length > limit;
}
console.log("Bora".isLengthGreaterThan(3));

Number.prototype.isPositive = function () { return this > 0; }
var a = 5;
var b = -2;
console.log(a.isPositive());
console.log(b.isPositive());
*/

var person = {
    firtName: 'Default',
    lastName: 'Default',
    great:function(){return "Thank your for came to my webinar"}
}

var bora = Object.create(person);
bora.firtName = 'Bora';
bora.lastName = 'Kasmer';
console.log(bora.great());



