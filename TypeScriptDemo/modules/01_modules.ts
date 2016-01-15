module EmptyModule {
    module InsideAnEmptyModule {
        module AnotherOneJustForKicks {
            var something = true;
        }
    }
}

module Geometry2D {
    export class Point {
        constructor(public x: number = 0, public y: number = 0) {
        }
    }
}

module Geometry3D {
    export function staticFunction() {
        console.log("A function on its own...");
    }
    
    var x = "private data for module";
    
    export var Konstant = 3.14;
    
    export class Point {
        constructor(public x: number = 0, public y: number = 0, public z: number = 0) {
        }
        
        project() : Geometry2D.Point {
            return new Geometry2D.Point(this.x, this.y);
        }
    }
    
    class ModuleHelper {
        somethingImportant(x: number, y: string) : string {
            return x + y;
        }
    }
}

var point = new Geometry3D.Point(1,2,3); // yep!
Geometry3D.staticFunction(); // exported!
//var helper = new Geometry3D.ModuleHelper(); // nope :-(
var projection = point.project();
//console.log(Geometry3D.x); // na'ah...
console.log(Geometry3D.Konstant); // note the intellisense...
