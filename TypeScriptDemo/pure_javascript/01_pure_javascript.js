var PureJs;
(function (PureJs) {
     function pureJavaScriptWithNoTypes(a, b, c) {
        console.log(a);
        console.log(b);
        
        return a + c;
    }
    PureJs.pureJavaScriptWithNoTypes = pureJavaScriptWithNoTypes;
})(PureJs || (PureJs = {}));