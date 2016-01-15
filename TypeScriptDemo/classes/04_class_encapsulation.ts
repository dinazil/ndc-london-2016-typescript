class YoungKitty {
    //private _name: string;
    private _dob: Date;
    protected _breed : string;
    
    constructor(private _name: string, birthday: Date) {
        this._name = name;
        this._dob = birthday;
    }
    
    beCute() : void {
        console.log(this._name + " says meow...");    
    }
    
    getAge() : number {
        var today = new Date();
        var age = this.yearsBetween(today, this._dob);
        if (age > 25) {
            age = 25;
        }
        return age;
    }
    
    private yearsBetween(d1: Date, d2: Date) : number {
        return (d1.valueOf() - d2.valueOf()) / 1000 / 60 / 24 / 365;
    }
}

function main() {
    var masha = new YoungKitty("Maria", new Date(1983, 12, 10));
    masha.beCute();
    console.log(masha.getAge());   
    //masha._dob 
}
