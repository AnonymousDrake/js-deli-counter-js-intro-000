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

var currentLine= katzDeliLine =>{
  var out = "The line is currently"
  if(katzDeliLine.length===0){
    return `${out} empty.`;
  }
  else {
    `${out}`;
    for(let i=0;i<katzDeliLine.length;i+=1){
      if(i===(katzDeliLine.length-1)) `${i+1}. ${katzDeliLine}.`
      else `${i+1}. ${katzDeliLine},`
    }
  }
}
