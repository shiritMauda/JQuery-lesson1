$(document).ready(function(){

    $("li").parent().addClass("highlight");
    //$("li").parents().addClass("frame");
    //$("li").parents("div").addClass("frame2");
    //$("li").parentsUntil("html").addClass("frame");
    //$("ul").children().addClass("highlight");
    //$("div").find("li").addClass("frame");
    //$(".x").siblings().addClass("highlight");
    //$("p").siblings("ul").addClass("newClass");
    //$("p").next().addClass("num9");
    //$("p").nextAll().addClass("num10");
    //$("h1").nextUntil("ul").addClass("num11");
    $("ul").prev().addClass("num12")
    $("ul").prevAll().addClass("num13");
    $("ul").prevUntil("h1").addClass("num14");
});
