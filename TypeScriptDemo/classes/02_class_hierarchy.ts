class Employee {
    name: string;
    dept: string;
    
    constructor() {
        this.name = "";
        this.dept = "general";
    }
}

class Manager extends Employee {
    reports: Employee[];
    
    constructor() {
        super();
        this.reports = [];
    }
}

class WorkerBee extends Employee {
    projects: any[];
    
    constructor() {
        super();
        this.projects = [];
    }
}

class SalesPerson extends WorkerBee {
    quota: number;
    
    constructor() {
        super();
        this.dept = "sales";
        this.quota = 100;
    }
}

class Engineer extends WorkerBee {
    machine: string;
    
    constructor() {
        super();
        this.machine = "";
        this.dept = "engineering";
    }
}