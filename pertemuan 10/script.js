const data = [1,2,3,4,5,6,7,8,9,10]

const result = data.filter(e => {
    if(e % 2 !== 0) {
        console.log(e)
    }
})
console.log(result);