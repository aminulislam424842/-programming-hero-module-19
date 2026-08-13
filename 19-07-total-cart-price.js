const calculateTotal = (items) => {
  return items.reduce((total , price)=>total+price,0)
}

const items = [100,200,300]
 
console.log(calculateTotal(items))