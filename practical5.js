function removeDuplicates(array) {
    const emc = new Set(array);
    return Array.from(emc);
  }
  
  
  const input = [1,2,3,4,5,1,6,2,7,1,3];
  const output = removeDuplicates(input);
  console.log(output); 
  