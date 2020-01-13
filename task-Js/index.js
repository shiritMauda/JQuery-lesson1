
arr=[];

//בעת הוספת התנדבות
document.getElementById("form")
.addEventListener("submit",addNewVolunteer);

function addNewVolunteer(e){
    e.preventDefault()

    let nameV = document.getElementById('nameV').value;
    let description = document.getElementById('description').value;
    let selP=document.getElementById('population');
    let population = selP.options[selP.selectedIndex].text;
    let sel = document.getElementById('day');
    let day = sel.options[sel.selectedIndex].text;
    let timeV = document.getElementById('timeV').value;
    let city = document.getElementById('city').value;
    let street = document.getElementById('street').value;
    let numberHouse = document.getElementById('numberHouse').value;
    let contact = document.getElementById('contact').value;

    let vol={nameV,description,population,day,timeV,city,street,numberHouse,contact};
    arr.push(vol)
    //הדפסה של ההתנדבויות במערך
    for (const v of arr) {
        v.print=print;
        v.print();

    }
}

function print() {
  

    console.group('FROM');
    console.log('שם ההתנדבות: ' + this.nameV);
    console.log(': תיאור' + this.description);
    console.log(': אוכלוסייה' + this.population);
    console.log(': יום בשבוע' + this.day);
    console.log(': שעה' + this.timeV);
    console.log(': כתובת' + getAdress(this));
    console.log(': איש קשר' + this.contact);
    console.groupEnd();

}

function getAdress(vol){
    return vol.city + ' ' + vol.street + ' ' + vol.numberHouse;
}
