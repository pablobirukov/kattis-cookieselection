const mock = [
    "2",
    "3",
    "911",
    "97625999",
    "91125426",
    "5",
    "113",
    "12340",
    "123440",
    "12345",
    "98346",
]

let mockIndex = 0;
var readline = () => {
    return mock[mockIndex++]
}


var numberOftestCases = +readline();
while (numberOftestCases--) {
    // *************** TEST CASE ***************
    nodee = {};
    var isTestCaseValid = true;
    var numberOfPhones_1 = +readline();
    while (numberOfPhones_1--) {
        var phoneNumber_1 = readline();
        // ************ PHONE ************
        var currentNodee = nodee;
        var isNumberValid = false;
        var numberLength = phoneNumber_1.length;
        var i = 0;
        while (i < numberLength) {
            // ************ DIGIT ************
            var digit = phoneNumber_1[i];
            if (!currentNodee[digit]) {
                var lastNodee = (i === numberLength - 1)
                    ? { terminal: true }
                    : {};
                if (i === numberLength - 1) {
                }
                currentNodee[digit] = lastNodee;
                currentNodee = currentNodee[digit]; // REASSIGN
                isNumberValid = true;
            }
            else {
                currentNodee = currentNodee[digit];
                if (currentNodee.terminal) {
                    isTestCaseValid = false;
                }
            }
            i++;
        }
        // ********* NUMBER HAS BEEN HANDLED *********
        if (!isNumberValid) {
            isTestCaseValid = false;
        }
    }
    // END OF TEST CASE 
    console.log(isTestCaseValid ? "YES" : "NO");
}