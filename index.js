var takeANumber = (katzDeliLine,customerName) =>{
if(katzDeliLine.length===0){
  katzDeliLine[0]=customerName;
}
else{
   katzDeliLine.push(customerName);
 }
   return `Welcome, ${katzDeliLine[katzDeliLine.length-1]}. You are number ${katzDeliLine.length} in line.`;
}

var nowServing= katzDeliLine =>{
if(katzDeliLine.length===0){
  return `There is nobody waiting to be served!`;
}
else{

  return `Currently serving ${katzDeliLine.shift()}.`;
}
}
