/*************************************************************
*                                                            *
*                 TIME AND SPACE COMPLEXITY                  *
*                            O(N)                            * 
*
*                                                            *
**************************************************************/


/***********************************************************************************************************************************************
 *                                                            SOLUTION DESCRIPTION                                                             *
 *                            1. LINE #39 CREATE THE FOR LOOP THAT CAN LOOP THROUGH THE ENTIRE ARRAY IF NECESSARY.                             *
 *      2. LINE #40 WITH THE VARIABLE "REMAINING" WE CAN STORE THE VALUE OF THE DIFFERENCE BETWEEN THE TARGET AND THE VALUE OF OUR ITEM.       *
 *               3. LINE #42 IN THE FIRST CONDITIONAL WE CHECK IF WE HAVE THE VALUE OF OUR REMAINING VARIABLE WITHIN OUR HASMAP.               *
 *                                      (WILL BE FALSE BECAUSE WE HAVE NOT ADDED VALUES ​​TO THE HASMAP)                                         *  
 *                            4. LINE #49 WE ADD THE VALUE OF OUR ITEM AND ITS POSITION THANKS TO THE HASHMAP SET.                             *
 *               5. LINE #42 WE GET THE NEW VALUE OF OUR REMAINING AND EVALUATE IF THE VALUE OF REMAINING IS INSIDE OUR HASHMAP                *
 *                     (IN THIS CASE IT WILL BE TRUE SINCE 9 - 7 = 2 AND WE HAD ALREADY ADDED THE VALUE 2 TO OUR HASHMAP)                      *
 *                      6. LINE #43 & #44 IF THE CONDITION IS TRUE, WE ADD THE POSITIONS OF OUR ITEMS TO THE RETURN ARRAY.                      *
 * (LINE #43 WE OBTAIN THE POSITION OF THE ITEM THAT IS EQUAL TO REMAINING THANKS TO THE GET METHOD OF HASHMAP AND ADD IT TO OUR RETURN ARRAY) *
 *          (LINE #44 WE ADD THE VALUE OF i BECAUSE IT IS EQUAL TO THE POSITION OF THE NUMBER THAT HELPED US TO OBTAIN OUR REMAINING)          *
 ***********************************************************************************************************************************************/

// input's declaration
// let array = [3, 3];
// const tarjet = 6;
let array = [2, 7, 11, 15];
const tarjet = 9;

const positions = findAddTarjet(array, tarjet);
console.log(positions);

function findAddTarjet(arr, tarjet) {

    // array return declaration
    const result = [];

    const hashMap = new Map();

    for (let i = 0; i < arr.length; i++) {
      const remaining = tarjet - arr[i];

      if (hashMap.has(remaining)) {
        result.push(hashMap.get(remaining));
        result.push(i);
        
        return result;
      }

      hashMap.set(arr[i], i);
      console.log(hashMap)
    }
    return result;
  }

  
