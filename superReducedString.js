/*Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. In each operation, select a pair of adjacent letters that match, and delete them.

Delete as many characters as possible using this method and return the resulting string. If the final string is empty, return Empty String */

function superReducedString(s) {
    let str = s;
    let i = 0;
    
    while(i < str.length - 1) {
        console.log(str[i] + ' ' + str[i+1]);
        if(str[i] == str[i+1]) {
            str = str.slice(0, i) + str.slice(i + 2, str.length);
            i = i > 0 ? i - 1 : 0;
        }
        else i++;
    }
    
    return str.length > 0 ? str : 'Empty String';
}