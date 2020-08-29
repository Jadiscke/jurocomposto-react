import updateInterest from './updateInterest';
import futureValue from './futureValue';
import futureValueApplyMonthly from './futureValueApplyMonthly';

interface Values {
    initialValue:number;
    months:number;
    monthly:number;
    interestRate: number;
    interestType: string;
}

function calculateReturn({initialValue, months,monthly, interestRate, interestType = 'yearly'}: Values){
    const updatedInterest = updateInterest(interestType, interestRate);
    const initalAplication = futureValue(initialValue,months,updatedInterest);
    const monthlyAplication = futureValueApplyMonthly(monthly, months, updatedInterest);
  
    return parseFloat(String(initalAplication + monthlyAplication)).toFixed(2)
}

export default calculateReturn;