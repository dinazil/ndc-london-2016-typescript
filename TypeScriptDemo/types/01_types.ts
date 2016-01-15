var int : number = 8;
//int = "1"; // no go

var double = 3.15;
//double = "pie"; // type was deduced

var monkeyBusiness : any = "whatever";
monkeyBusiness = true; // that's ok, i'm a wizard

var numArray: number[] = [1,2,3];
//numArray[4] = "4"; // nope

var image = <HTMLImageElement>document.createElement("image");
image.src = ""; //...

var button = <HTMLButtonElement>document.createElement("button")
//button.src = ""; // this is obviously wrong

function addNumbers(a: number, b: number): number {
    return a + b;
}
 
//addNumbers("1", "2"); // this is wrong
//addNumbers(1, 2, 3); // and so is this
//var text: string = addNumbers(1, 2); // return value type is deduced
//addNumbers(); // the IDE will suggest the signature

function addAnything(a: any, b: any) : any {
    return a + b;
}

addAnything(1, 2); // that's OK
addAnything("1", "2"); // also cool
addAnything(1, "2");
//addAnything(1,2,3); // still no go

function identity<T>(a: T) : T {
    return a;
}

var one = identity(1); // it just knows
var two = identity<string>("two");
//var three = identity<number>("three"); // bad input
//var four : number = identity("four"); // bad assignment
