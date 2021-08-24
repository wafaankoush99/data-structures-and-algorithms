let i = 1
function sqrt(a) {
    if (i * i === a) {
        return i
    }
    else if (i === a) {
        return false
    }
    i++
    return sqrt(a)
}

console.log(sqrt(121))

//////////////////////////////////////

function reverse(str) {
    let arr = str.split('.')
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i])
    }
    console.log(newArr)
    let newStr = newArr.join('.')
    return newStr;
}
reverse('I.like.banana')

///////////////////////////////////


function secMax(arr) {
    // let sec = arr[0];
    // arr.forEach(
    //   (a, b) =>{ 
    //   if (a > sec) sec = a;
    // }
    // )
    // return sec;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr[arr.length - 2]
}

console.log(secMax([7, 5, 3, 2]))

///////////////////////////////////////

function repeatedChar(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1
        }
        else if (obj[str[i]]) {
            obj[str[i]] = obj[str[i]] + 1
        }
    }

    let k = Object.values(obj)[0]
    for (let key in obj) {
        if (obj[key] > k) { k = obj[key] }
        if (obj[key] === 1) {
            delete obj[key]
        }
    }
    console.log(k)
    console.log(obj)
}

repeatedChar('aaakbbbbbbbbbbc')

//////////////////////////////////


function firstUnique(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) { obj[str[i]] = 1 }
        else (obj[str[i]] = obj[str[i]] + 1)
    }
    // console.log(obj)
    for (let key in obj) {
        if (obj[key] === 1) return key
    }
}
console.log(firstUnique('aaakbbbbbbbbbbc'))

///////////////////////////////////////

// return index

function firstUniqueNum1(arr) {
    let obj = {}
    let unique;
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) { obj[arr[i]] = 1 }
        else obj[arr[i]] = obj[arr[i]] + 1
    }
    for (let key in obj) {
        if (obj[key] === 1) {
            unique = key
            break;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == unique) {
            return i
        }
    }
}
console.log(firstUniqueNum1([1, 2, 1, 4, 2, 5, 5]))

// key: val
// key : obj[key]


/////////////////////////////////////////////////


function swap(a, b) {
    let sum = a + b
    a = sum - a
    b = sum - b
    return `a: ${a}, b: ${b}`
}

console.log(swap(1, 2))

////////////////////////////////////////

function duplicate(arr) {
    // let newArr = arr
    // let result = arr+','+newArr
    // return result.split(',')
    let m = []
    for (let i = 0; i < arr.length; i++) {
        m[i] = arr[i]
        m[i + arr.length] = arr[i]
        // m.push(...arr,...arr)
    }
    return m
}

console.log(duplicate([1, 2, 3]))

///////////////////////////////////////////

let sum = 0
let result
function repeat(num) {
    if (num === 0) {
        result = sum
    }
    else if (num % 2 === 0) {
        num = num / 2
        sum++
        repeat(num)
    }
    else if (num % 2 !== 0) {
        num = num - 1
        sum++
        repeat(num)
    }
    return result
}

repeat(10)

///////////////////////////////////////////////

function chunk(arr, k) {
    let newArr = []
    let newArr2 = []
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (i < k) { newArr2.push(arr[i]) }
        else newArr.push(arr[i])
    }
    result.push(...newArr, ...newArr2)
    return result;
}

console.log(chunk([1, 2, 3, 4, 5], 3))

/////////////////////////////////////////

function isSubstring(str1, str2) {
    let check = false
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) { check = true }
            else check = false
        }
    }
    return check
}

console.log(isSubstring('llo', 'Hello'))


///////////////////////////////////////////


function isSubstring(str1, str2) {
    let j = 0
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === str1[j]) {
            j++
            while (str2[i + j] !== str1[j]) {
                return false
            }
            return true
        }
        else return false
    }
}

console.log(isSubstring('he', 'Hello'))

/////////////////////////////////////////

function isSubstring(long, short) {
    let firstShort = short[0]
    let check;
    let sum = 0
    for (let i = 0; i < long.length; i++) {
        if (long[i] === firstShort) {
            while (sum < short.length) {
                if (short[sum] === long[i + sum]) {
                    check = true
                }
                else { check = false }
                sum++
            }
        }
    }
    return check
}


console.log(isSubstring('marhaba', 'rh'))


////////////////////////////////////////////////


function reverseInt(number) {
    var revNumber = 0;
    while (number > 0) {
        revNumber = (revNumber * 10) + (number % 10);
        number = Math.floor(number / 10);
    }
    return revNumber;
}


console.log(reverseInt(14))

//////////////////////////////////////////////




function twoDi(arr) {
    let sum = 0
    let len = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][i]
    }
    console.log(sum)
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][len]
        len--
    }
    return sum
}


//////////////////////////////////////////////


function checkNumber(str){
    let num=/[0-9]/g;
    return num.test(str);
  }
  console.log(checkNumber('aaax'));
  
  /////////////////////////////////////
  
  function rootValue(num, root){
    let num1=Math.pow(num, 1/root)
    return Math.ceil(num1) ;
  }
  console.log(rootValue(125,3))

///////////////////////////////////////////

