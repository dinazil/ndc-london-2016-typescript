interface IGetOptions {
    url: string;
    parameters?: {[id : string]: string; };
    success: () => void;
    error: (ec : number, message: string) => void;
}

function get(command: IGetOptions) {
    if (command.parameters != null) {
        // concatenate them to url
    }
}

class GetOptions implements IGetOptions {
    url: string;
    parameters: {[id : string]: string};
    success: () => void;
    error: (ec : number, message: string) => void;
}

// very tiresome
var url = "http://google.com";
var parameters : {[id:string] : string} = {};
parameters["q"] = "TypeScript";
var options = new GetOptions();
options.url = url;
options.parameters = parameters;
options.success = () => {
    console.log("got " + url + " successfully");
};
options.error = (ec, message) => {
  console.log("There was an error getting " + url + ": " + message);  
};

get(options);

// this is also good
get({url: url, success: null, error: null});