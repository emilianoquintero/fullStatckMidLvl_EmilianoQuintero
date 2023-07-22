
/*************************************************************
*                                                            *
*                 TIME AND SPACE COMPLEXITY                  *
*                            (O)N                            *
*                                                            *
**************************************************************/

/*************************************************************
*                                                            *
*                    SOLUTION DESCRIPTION                    *
*   The description of the solution is in the comments.      *
*                                                            *
**************************************************************/

// input declaration
const nums = [4, 3, 2, 7, 8, 2, 3, 1];

const output = findMissingNums(nums);
console.log(output);


function findMissingNums(arr) {
    // map declaration
    const hashMap = new Map();

    // array return declaration
    const missingNums = [];

    // fill the HashMap with the numbers present in the array     
    arr.forEach((num) => {
        hashMap.set(num);
    });

    // Then, we loop through all numbers within the range of the array.
    for (let i = 1; i <= arr.length; i++) {

        // if they are not present in the HashMap then we add the value i with a push to the return array
        if (!hashMap.has(i)) {
            missingNums.push(i);
        }
    }

  return missingNums;
}


