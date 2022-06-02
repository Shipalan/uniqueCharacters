// Write your code below

function unique(chars){
    strArray = chars.split('')

   for(let i = 0; i < chars.length - 1; i++){
    for(let j = i + 1; j < chars.length; j++){
    if (chars[i] === chars[j]){
        return false;
    }
}
}
      return true;
} 
   


console.log(unique('monday'))