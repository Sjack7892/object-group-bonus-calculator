const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

function employeeBonus(person) {
  let newObject = {
    name: person.name,
    bonusPercentage: 5,
    totalCompensation: (person.annualSalary),
    totalBonus: 1,
  };
  // console.log(newObject)

  // check a persons rating

  // check a persons id

  // check 

  //return
}
console.log(employees[4].name);
// console.log(employeeBonus(employees[4]));

let array = [];

function bonusCalculator() {
  let bonPercentage;
  for (let employee of employees) {
    console.log(employee)  
    if (employee.reviewRating < 3) {
      bonPercentage = 0;
      console.log('Bonus:', bonPercentage);
      array.push({bonusPercentage: bonPercentage});
    } else if (employee.reviewRating === 3) {
      bonPercentage = 0.04;
      console.log('Bonus:', bonPercentage);
    } else if (employee.reviewRating === 4) {
      bonPercentage = 0.06;
      console.log('Bonus:', bonPercentage);
    } else if (employee.reviewRating === 5) {
      bonPercentage = 0.1;
      console.log('Bonus:', bonPercentage);
    }
    if (employee.employeeNumber < 10000) {
      bonPercentage += 0.05;
      console.log('Bonus plus tenure:',bonPercentage);
    } 
    if (employee.annualSalary > 65000) {
      bonPercentage -= 0.01;
      console.log('Bonus after reduction:',bonPercentage);
    } 
    if (bonPercentage > 0.13) {
        bonPercentage = 0.13;
        console.log('Final Bonus:', bonPercentage);
    } else if (bonPercentage < 0) {
       bonPercentusage = 0;
       console.log('Final Bonus:', bonPercentage);
    }
  }
}
bonusCalculator();


// function checkPenguins(allPenguins, maxHeight) {
//     let allMatchingPenguins = [];
//     // penguin is the same as saying allPenguins[i] in a traditional for loop
//     for (let penguin of allPenguins) {
//         console.log(penguin);
//         if (penguin.isCute && penguin.size < maxHeight) {
//             console.log(`It's cute!`)
//             console.log(`It's smaller!`)
//             //add current penguin into allMatchingPenguins
//             allMatchingPenguins.push(penguin)
//         }
//     }
//     return allMatchingPenguins;
// } // end function checkPenguins


