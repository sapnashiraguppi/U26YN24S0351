const express = require("express");

const app =express();
app.use(express.json());
let employees = [
    {
        id: "1",
        name: "Navya",
        department: "IT",
        salary: 25000
    },
    {
        id: "2",
        name: "Rahul",
        department: "HR",
        salary: 30000
    }

];
app.get("/employees", (req, res) => {
    res.json(employees);
});
app.get("/employees/:id", (req, res) => {

    let eid = req.params.id;

    let employee = employees.find((e) => {
        return e.id == eid;
    });

    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({
            message: "Employee record not found"
        });
    }
});
app.post("/employees", (req, res) => {

    let id = req.body.id;
    let name = req.body.name;
    let department = req.body.department;
    let salary = req.body.salary;

    let e = {
        id: id,
        name: name,
        department: department,
        salary: salary
    };

    employees.push(e);

    res.status(201).json({
        message: "Employee record inserted",
        employee: e
    });
});
app.put("/employees/:id", (req, res) => {

    let eid = req.params.id;

    let name = req.body.name;
    let department = req.body.department;
    let salary = req.body.salary;

    let index = employees.findIndex((e) => {
        return e.id == eid;
    });

    if (index !== -1) {

        let e = {
            id: eid,
            name: name,
            department: department,
            salary: salary
        };

        employees[index] = e;

        res.json({
            message: "Employee record updated",
            employee: e
        });

    } else {

        res.status(404).json({
            message: "Employee record not found"
        });

    }
});
app.delete("/employees/:id", (req, res) => {

    let eid = req.params.id;

    let index = employees.findIndex((e) => {
        return e.id == eid;
    });

    if (index !== -1) {

        let deletedEmployee = employees[index];

        employees.splice(index, 1);

        res.json({
            message: "Employee record deleted",
            employee: deletedEmployee
        });

    } else {

        res.status(404).json({
            message: "Employee record not found"
        });

    }
});
app.listen(3000, () => {
    console.log("Server started");
});