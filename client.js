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

console.log( employees );

const maxBonus = .13;
const minBonus = 0;
let bonuses = [];

function bonusCalc(object){
  let workerBonus = {};
  workerBonus.name = object.name;
  if (object.reviewRating < 2) {
    workerBonus.bonusPercentage = 0;
  } else if (object.reviewRating === 3){
    workerBonus.bonusPercentage = .04;
  } else if (object.reviewRating === 4){
    workerBonus.bonusPercentage = .06;
  } else if (object.reviewRating === 5){
    workerBonus.bonusPercentage = .10;
  } 
  if (object.employeeNumber.length === 4){
    (workerBonus.bonusPercentage += .05).toFixed(2);
  } 
  if (Number(object.annualSalary) > 65000) {
    (workerBonus.bonusPercentage -= .01).toFixed(2);
  }
  if (workerBonus.bonusPercentage > maxBonus){
    workerBonus.bonusPercentage = maxBonus;
  }
  if (workerBonus.bonusPercentage < minBonus){
    workerBonus.bonusPercentage = minBonus;
  }
  workerBonus.totalBonus = Number(object.annualSalary)* workerBonus.bonusPercentage;
  console.log(Number(object.annualSalary));

  workerBonus.totalCompensation = Number(object.annualSalary) + workerBonus.totalBonus;

  return workerBonus;
}


for(let worker of employees){
  bonuses.push(bonusCalc(worker));
};

console.log(bonuses);
