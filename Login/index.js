var arr=[];

let person1 = {
    firstName:"uri"
    lastName:"redler"
    mail:36
}

arr.push(person1)

document.getElementById("button")
    .addEventListener("click", function () {
        console.log("Submit!");
        console.log(document.getElementById("userName").value);
        console.log(document.getElementById("lastName").value);
        console.log(document.getElementById("mail").value);
    });



