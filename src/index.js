module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let a = 0;
  for(i=0; i<arr.length; i++){
    if(arr[i] === '('){
      a+= 1
    }else if(arr[i] === ')'){
      a+= -1
    } 
    

  
  if(a > 0 || a < 0){
    return false
  }else if(a === 0){
    return true
  }
 
}
}
