// Include you JavaScript Librarys. The following is an example import
////= library/youpathonjsfile.js
// You JavaScript Code
function SendPriceForm(price_form) {
    $.ajax({
        type: 'POST',
        url: 'send.php',
        data: $('#' + price_form).serialize(),
        success: function(html) {
            $('#' + price_form).prepend('Заявка принята! В ближайшее время с Вами свяжется наш специалист.');
        }
    })
}

//E-mail Ajax Send
$("#price-form").submit(function() { //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "send.php", //Change
        data: th.serialize()
    }).done(function() {
        //alert("Thank you!");
        $("#price-form .mask").append('<div class="mt-4 alert alert-success" role="alert">Заявка принята! В ближайшее время с Вами свяжется наш специалист.</div>');
        setTimeout(function() {
        // Done Functions
        th.trigger("reset");
        }, 1000);
        setTimeout(function() {
            $('#price-form .alert').alert('close');
        }, 5000);
    });
    return false;
});

$("#size-form").submit(function() { //Change
    var td = $(this);
    $.ajax({
        type: "POST",
        url: "send.php", //Change
        data: td.serialize()
    }).done(function() {
        //alert("Thank you!");
        $("#size-form .mask").append('<div class="mt-4 alert alert-success" role="alert">Заявка принята! В ближайшее время с Вами свяжется наш специалист.</div>');
        setTimeout(function() {
        // Done Functions
        td.trigger("reset");
        }, 1000);
        setTimeout(function() {
            $('#size-form .alert').alert('close');
        }, 5000);
    });
    return false;
});

$(window).scroll(function () {
    var $this = $(this),
        $head = $('#header .navbar');
    if ($this.scrollTop() > 120) {
       $head.addClass('fixed-top navbar-light bg-light shadow');
    } else {
       $head.removeClass('fixed-top navbar-light bg-light shadow');
    }
});