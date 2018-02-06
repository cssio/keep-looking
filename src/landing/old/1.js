var main = function() {
    var x = 0;

    function func() {
        if (x == 0) {
            $(".point.point-1").css("opacity", "0");
            $(".point.point-2").css("opacity", "0");
            $(".point.point-3").css("opacity", "0");
            x++;
        } else if (x == 1) {
            $(".point.point-1").css("opacity", "1");
            $(".point.point-2").css("opacity", "0");
            $(".point.point-3").css("opacity", "0");
            x++;
        } else if (x == 2) {
            $(".point.point-1").css("opacity", "1");
            $(".point.point-2").css("opacity", "1");
            $(".point.point-3").css("opacity", "0");
            x++;
        } else if (x == 3) {
            $(".point.point-1").css("opacity", "1");
            $(".point.point-2").css("opacity", "1");
            $(".point.point-3").css("opacity", "1");
            x = 0;
        }
    }
    setInterval(func, 500);

    $(window).resize(function() {
        var h = $("p.bottom").offset();
        console.log(h);
    });

}

$(document).ready(main);
