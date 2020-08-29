function updateInterest(interest_type:string, interest:number){
    const updatedInterest = interest/100 + 1;
    if (interest_type === "yearly"){
      return Math.pow(updatedInterest, 1/12)
    }
    return updatedInterest
}

export default updateInterest;
