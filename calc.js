function index_in_array (arr, elem) {
    try {
        if (arr.indexOf(elem) < 0) {
            throw error = new Error("не найдено");
        };
    return(arr.indexOf(elem));
    } catch(e) {
        return e.message;
    };
};

function palindrome (string) {
    let newstring = string
        .split('')
        .reverse()
        .join('');
    if (newstring === string) {
        console.log("Это палиндром");
    } else {
        console.log("Это обычное слово");
    };
};



function palindrome2 (string) {
    let newstring = string
        .split('')
        .reverse()
        .join('');
    if (binary(newstring) === binary(string)) {
        console.log("Это палиндром");
    } else {
        console.log("Это обычное слово");
    };

    function binary (str) {
        let result = str
            .split('')
            .map((function(letter) {
            num2 = letter
                .charCodeAt(0)
                .toString(2);
            return num2;
            }));
        str = result.join('');
        return str;
    };
};

function palindrome3 (string)
let arr1 = ["baobab", "moba"];
console.log(index_in_array(arr1, "moba"));
console.log(index_in_array(arr1, "gg"));
palindrome("aboba");
palindrome("boba");
palindrome2("aboba");
palindrome2("boba");
