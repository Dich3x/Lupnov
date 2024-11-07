let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
function binary_search (list, item) {
    let start = 0;
    let end = list.length;
    let mid = 0
    // do {
    //     if (list.start == item) {
    //         console.log(start)
    //     }
        while (start != list[item]) {
        mid = ~~((start + end) / 2)
        if (mid >= item) {
            end = mid
        } else {
            start = mid
        }
        console.log(start)
    }
}

binary_search (arr1, 5)