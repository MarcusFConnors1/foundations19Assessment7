function sumZero (arr){
    let ans = false
    for(i = 0; i < arr.length; i++){
        for(j = 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return ans = true
            }
        }
    }
    return ans
}
console.log(sumZero([1, 2, 3, -3]))

// I believe the runtime of this to be O(n^2)
// I believe the space complexity of this to be O(n^2)

function is_unique(str) {
    var obj = {};
    for (var z = 0; z < str.length; ++z) {
      var ch = str[z];
      if (obj[ch]) return false;
      obj[ch] = true;
    }
    return true;
}
console.log(is_unique('aasdfghjkl;'))

// I believe the runtime of this to be O(n)
// I belive the space complexity of this to be O(n)

const str = "The quick brown fox jumps over the lazy dog!";
const isPangram = (str = '') => {
   str = str.toLowerCase();
   const { length } = str;
   const alphabets = 'abcdefghijklmnopqrstuvwxyz';
   const alphaArr = alphabets.split('');
   for(let i = 0; i < length; i++){
      const el = str[i];
      const index = alphaArr.indexOf(el);
      if(index !== -1){
         alphaArr.splice(index, 1);
      };
   };
   return !alphaArr.length;
};
console.log(isPangram(str));

// I believe the runtime of this to be O(n^2)
// I believe the space complexity of this to be O(n)

function findLongestWord(arr) {
    let answer = 0
    for(i = 0; i < arr.length; i++){
        for(x = 1; x < arr.length; x++){
            if(arr[i].length > arr[x].length){
                answer = arr[i].length
            } else if(arr[x].length > arr[i].length){
                answer = arr[x].length
            }
        }
    }
    return answer
}
console.log(findLongestWord(["hi", "hello"]))

// I believe the runtime of this to be O(n^2)
// I believe the space complexity of this to be O(1)