const raccoonFactory = (name, age, stripeNumber) => {
    const chitter = () => console.log("CHITTER CHITTER!");
    return {name, age, stripeNumber, chitter};
  }
  
  const Terry = raccoonFactory("Terry", 10, 3);
  
  console.log(Terry.name);
  console.log(Terry.stripeNumber);
  
  Terry.chitter();