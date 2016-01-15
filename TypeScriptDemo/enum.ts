enum MySmartEnum {
    A = 1,
    B = 2,
    C = 3
}

$(document).ready(() => {
    var text: string = MySmartEnum.A.toString();
    var fromString: MySmartEnum = MySmartEnum["B"];
    var fromInt: MySmartEnum = 3;

    console.log("text: " + text + " " + MySmartEnum[text]);
    console.log("fromString :" + fromString + " " + MySmartEnum[fromString]);
    console.log("fromInt :" + fromInt + " " + MySmartEnum[fromInt]);    
});
