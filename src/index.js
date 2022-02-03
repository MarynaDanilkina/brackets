module.exports = function check(str, bracketsConfig) {
  console.log(str)
  while( str.length && str.includes('()') || str.includes('{}') || str.includes('[]') || str.includes('||') || str.includes('11') ||  str.includes('22') || str.includes('33') || str.includes('44') || str.includes('55') || str.includes('66') || str.includes('77') || str.includes('88') || str.includes('99')|| str.includes('15')|| str.includes('62') ){
    str = str.replace('()','')
    str = str.replace('{}','')
    str = str.replace('[]','')
    str = str.replace('||','')
    str = str.replace('11','')
    str = str.replace('22','')
    str = str.replace('33','')
    str = str.replace('44','')
    str = str.replace('55','')
    str = str.replace('66','')
    str = str.replace('77','')
    str = str.replace('88','')
    str = str.replace('99','')
    str = str.replace('15','')
    str = str.replace('62','')
  }
    if(str.length === 0){
      return true
    }else{
      return false
    }

  }


