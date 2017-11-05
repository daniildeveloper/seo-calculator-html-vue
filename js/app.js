// $(function () {
//     $.pixlayout({
//         src: "/img/main.png",
//         opacity: 0.7,
//         top: 0,
//         center: true,
//         clip: true,
//         show: true
//     });
// });
var rangeLightBlue = "#AFD7F5";
var rangeBlue = "#5CA9DD";

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
window.onload = function () {
    

    $(function () {
        var r = $('#range');
        r.on('mouseenter', function () {
            var p = r.val();
            r.on('click', function () {
                p = r.val();
                bg(p, r);
            });
            r.on('mousemove', function () {
                p = r.val();
                bg(p, r);
            });
        });

        var rl = $('#range-left');
        rl.on('mouseenter', function () {
            var p = rl.val();
            rl.on('click', function () {
                p = rl.val();
                bg(p, rl);
            });
            rl.on('mousemove', function () {
                p = rl.val();
                bg(p, rl);
            });
        });

        function bg(n, r) {
            n = n / 100
            r.css({
                'background-image': '-webkit-linear-gradient(left ,' + rangeBlue + ' 0%, ' + rangeBlue + ' ' + n + '%,' + rangeLightBlue + ' ' + n + '%, ' + rangeLightBlue + ' 100%)'
            });
        }
    });
}

function bg (n, r) {
    n = n / 100
    r.css({
        'background-image': '-webkit-linear-gradient(left ,' + rangeBlue + ' 0%, ' + rangeBlue + ' ' + n + '%,' + rangeLightBlue + ' ' + n + '%, ' + rangeLightBlue + ' 100%)'
    });
}

function bgR(n) {
    bg(n, $('#range') );
}

function bgL(n) {
    bg(n, $('#range-left'));
}