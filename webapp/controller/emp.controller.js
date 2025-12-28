sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
], (Controller, JSONModel,MessageBox) => {
    "use strict";

    return Controller.extend("employee.controller.emp", {
        onInit() {
        },
        onSubmit() {
            var name=this.getView().byId("inptIdname").getValue();
            var empid=this.getView().byId("inptIdid").getValue();
            var email=this.getView().byId("inptIdeml").getValue();
            var salary=this.getView().byId("inptIdslry").getValue();
            var gender=this.getView().byId("slctIdgndr").getSelectedKey();
            var dob=this.getView().byId("dtpId").getValue();
            if(!name) {
                this.getView().byId("inptIdname").setValueState("Error");
                this.getView().byId("inptIdname").setValueStateText("Enter Name please");
            }
            if (!/^[0-9]{5}$/.test(empid)) {
                this.getView().byId("inptIdid").setValueState("Error");
                this.getView().byId("inptIdid").setValueStateText("Employee ID should contain five digits");
            } 
            if (!/^[A-Za-z0-9@.]+$/.test(email)) {
                this.getView().byId("inptIdeml").setValueState("Error");
                this.getView().byId("inptIdeml").setValueStateText("Enter Valid Email ID");
            }
            if (!/^[0-9,]+$/.test(salary)) {
                this.getView().byId("inptIdslry").setValueState("Error");
                this.getView().byId("inptIdslry").setValueStateText("Your Salary Should Contain Numeric Values");
            }
            if(!gender) {
                this.getView().byId("slctIdgndr").setValueState("Error");
                this.getView().byId("slctIdgndr").setValueStateText("Please Select Gender");
            }
        }
    });
});
        //JSON object
        //     var jModel = {
        //         EmployeeDetails: [
        //             {
        //                 empId: "",
        //                 Name: "",
        //                 Salary: "",
        //                 Gender:"",
        //                 Department: "",
        //                 City: ""
        //             },
        //             // Gender = [
        //             //       { text: "Male" },
        //             //       { text: "Female" },
        //             //       {text:"Trans"}
        //             //   ],

        //             // Department = [
        //             //      { text: "Software Engineer" },
        //             //      { text: "Information Technology" },
        //             //      { text: "Cybersecurity" }
        //             //  ]
        //         ]
        //     };
        //     //JSON model
        //     var JModel = new JSONModel(jModel);
        //     this.getView().setModel(JModel, "EmpModel")
        // },
        //     onSubmit() {
        //         var oModel = this.getView().getModel("EmpModel");
        //         var oEmployee = oModel.getProperty("/EmployeeDetails");


        //         //Switch based on Department selected
        //         switch (oEmployee.Department) {
        //             case "Software Engineer":
        //                 var Message = oEmployee.EmpId + " " + oEmployee.Name + " " + oEmployee.Salary + " " + "Gender: " + oEmployee.Gender + " is a" + oEmployee.Department;
        //                 break;

        //             case "Information Technology":
        //                 var Message = oEmployee.EmpId + " " + oEmployee.Name + " " + oEmployee.Salary + " " + "Gender: " + oEmployee.Gender + " is a" + oEmployee.Department;
        //                 break;

        //             case "Cybersecurity":
        //                 var Message = oEmployee.EmpId + " " + oEmployee.Name + " " + oEmployee.Salary + " " + "Gender: " + oEmployee.Gender + " is a" + oEmployee.Department;
        //                 break;

        //             default:
        //                 var Message = "Unknown designation selected.";
        //         }
        //         MessageBox.show(Message);