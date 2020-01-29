var urlApi="https://reqres.in/api/users";
var page;
var users;

$(document).ready(function () {
    
$("button").on('click',getFunction)


});

function getFunction(){
    console.log("click button");
   page= $(".page").val();
    users= $(".users").val();
    console.log(page);
    let url = urlApi + "?page="+page+"&per_page="+users
    $.get(url, resFunc)
}

function resFunc(res)
{
    buildTable(res.data)
}

function buildTable(data){


for (i = 0; i < data.length; i++) {
    var id = data[i].id;
    var email = data[i].email;
    var firstName = data[i].first_name;
    var lastName = data[i].last_name;
    var avatar = data[i].avatar;
    var markup = "<tr><td>"+id+"</td><td>" + email + "</td><td>" + firstName + "</td><td>" + lastName +"</td><td>" + avatar + "</td></tr>";
    $("table tbody").append(markup);
}
}