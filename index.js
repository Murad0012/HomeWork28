//1
// console.log(string_to_array("Robin Singh"));

// function string_to_array(sentence){
//     return sentence.split(" ");
// }

//2
// console.log(truncate_string("Robin Singh",4));

// function truncate_string(sentence,count){
//     return sentence.substring(0,count)
// }

//3
// console.log(protect_email("robin_singh@example.com"));

// function protect_email(gmail){
//     var arr = gmail.split("@");
//     first = arr[0];
//     last = arr[1];
//     hidden = first.substring(0,(first.length - first.length / 2))
//     return hidden + "...@" + last;
// }

//4
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));

// function repeat_string(word,repeat){
//     var word1 = "";
//     if(repeat == undefined){
//         return "Error in string or count.";
//     }

//     for(i = 0;repeat > i;i++){
//         word1 += word;
//     }

//     return word1
// }


//5
// console.log(search_word('The quick brown fox', 'fox'));
// console.log(search_word('aa, bb, cc, dd, aa,', 'aa'));

// function search_word(sentence,word){
//     var a = sentence.split(" ");
//     let count = 0;
//     for(var i = 0;a.length > i;i++){
//         if(a[i].includes(word)){
//            count += 1;
//         }
//     }
//     return count
// }