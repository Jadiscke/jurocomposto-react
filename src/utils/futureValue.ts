function futureValue(initialValue: number, months: number, interestRate: number){
    return initialValue * Math.pow(interestRate,months)
}

export default futureValue;
  
  
  