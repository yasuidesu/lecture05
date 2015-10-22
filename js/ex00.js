function a(number){
   if (number %2==0) {
  return true;
   }
  return false;
}

function b(number){
  if(number % 5 == 0){
   return true;
 }
   return false;
}

function c (number){
  var resultA,resultB,result;
  resultA = a(number);
  resultB = b(number);

  result = resultA && resultB;
   return result;
}
