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

function employeeLoop() {
  for (let i = 0; i < employees.length; i++) {
    employeeBonusCalculate(employees[i]);
  }
}

function employeeBonusCalculate(employee) {
  let bonusPercentage = 0;

  if (employee.employeeNumber < 10000) {
    bonusPercentage += 0.05;
  }

  if (Number(employee.annualSalary > 65000)) {
    bonusPercentage -= 0.01;
  }

  if (employee.reviewRating <= 2) {
    bonusPercentage += 0;
  } else if (employee.reviewRating === 3) {
    bonusPercentage += 0.04;
  } else if (employee.reviewRating === 4) {
    bonusPercentage += 0.06;
  } else if (employee.reviewRating === 5) {
    bonusPercentage += 0.1;
  }

  if (bonusPercentage > 0.13) {
    bonusPercentage = 0.13;
  } else if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }

  let totalBonus = Math.round((Number(employee.annualSalary) * bonusPercentage));

  let totalCompensation = totalBonus + Number(employee.annualSalary);

  let newObject = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: (totalBonus)
  }
  console.log(newObject)
}

employeeLoop();