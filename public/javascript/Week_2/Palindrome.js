function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          document.getElementById('isPalindrome').innerHTML = "it is not a palindrome";
      }else{
        document.getElementById('isPalindrome').innerHTML = "it is a palindrome";
      }
    }
   }