/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let answer = []
    for (let i in temperatures) {
        answer.push(0)
    }

    //[30,60,90]
    for (let i = 0; i < temperatures.length; i++) {
        let counter = 0
        for (let j = i; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                answer[i] = counter
                break
            } else {
                counter++
            }
        }
    }

    return answer
};