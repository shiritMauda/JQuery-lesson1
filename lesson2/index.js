
  
// console.log('Script Ready',new Date().getTime());



$(document).ready(function () {
    // console.log('Dom Ready',new Date().getTime());

    $('button').click(someFunction);

    $("#mark").css("background","yellow");
    $(".mark").css("background","yellow");
    $("p").css("background","red");
    $('input[type="text"]').css("background","yellow")
    $("p.mark").css("background","green");
    $("#mark span").css("background","blue");
    $("ul li").css("background","pink");
    $("ul.mark li").css("background","gray");
    $('a[target="_blank"]').css("background","orange");
    //$('a[href="https://www.inn.co.il"]').css("background","orange");
    $("tr:odd").css("background","gray");
    $("tr:even").css("background","yellow");
    $("p:first").css("border","solid 3px black");
    $("p:last").css("border","solid 3px black");
    $("form :text").css("background","pink");
    $("form :password").css("background","purple");
    $("form :submit").css("background","brown");
});



function someFunction(e) {
    $('.h').toggle(4000).toggle(200);
    console.log('someFunction', e);
}
function someFunction1() {
    $('body')
        .append("<h1>😎someFunction!!</h1>")

}

