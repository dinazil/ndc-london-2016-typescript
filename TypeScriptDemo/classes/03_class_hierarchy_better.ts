class EmployeeBetter {
    constructor(public name: string = "", public dept: string = "general") { }
}

class ManagerBetter extends EmployeeBetter {
    constructor(name: string = "", dept: string = "general", public reports: Employee[] = []) {
        super(name, dept);    
    }
}

class WorkerBeeBetter extends EmployeeBetter {
    constructor(name: string = "", dept: string = "general", public projects: any[] = []) {
        super(name, dept);
    }
}

class SalesPersonBetter extends WorkerBeeBetter {
    constructor(name: string = "", projects: any[] = [], public quota: number = 100) {
        super(name, "sales", projects);
    }
}

class EngineerBetter extends WorkerBeeBetter {
    constructor(name: string = "", projects: any[] = [], public machine: string = "") {
        super(name, "engineering", projects);
    }
}

var michelle = new EngineerBetter("Michelle");
