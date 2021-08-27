function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

var result1 = buildName("Bob");  //làm việc hoàn toàn OK. buildName("bob") = "bob Smith"
var result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName("Bob", "Adams");  //ah, just right

console.log(`${result1} - ${result2} - ${result3}`);
