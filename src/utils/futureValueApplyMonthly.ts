function futureValueApplyMonthly(monthlyValue: number, months:number,interestRate:number){
    return monthlyValue * (Math.pow(interestRate,months) - 1)/(interestRate - 1)
  }

export default futureValueApplyMonthly;