// Write your solution in this file!
let employee = {name:"Bob", streetAddress: "123"}

function updateEmployeeWithKeyAndValue(employee, key, value) {
return {...employee,...{[key]:value}}




  //   obj[key]=value;
//   return employee
// 
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key]=value
  return employee
}

function deleteFromEmployeeByKey(employee, key){
let newEmployee = {...employee}
  delete newEmployee[key]
return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
delete employee[key]
return employee
}