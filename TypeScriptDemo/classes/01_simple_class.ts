class Kitty {
    _name: string;
    
    constructor(name: string) {
        this._name = name;
    }
    
    beCute() : void {
        console.log(this._name + " says meow...");    
    }
    
    befriend(other: Kitty) : void;
    befriend(name: string) : void;
    
    befriend(other: any) : void {
        if (typeof other == "string") {
            // become friends with kitty by name of...
        }
        if (typeof other == "Kitty") {
            // become friends with another kitty
        }
    }
}

var svetlana = new Kitty("Svetlana");
svetlana.beCute();
