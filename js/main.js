$(function() {

    $(window).trigger('resize');

    $('#mc-embedded-subscribe').click(function() {
        var msg = {};
        msg.from = $('#mce-EMAIL').val();
        msg.firstName = $('#mce-FNAME').val();
        msg.lastName = $('#mce-LNAME').val();
        msg.message = $('#mce-MMERGE3').val() || '';

        $.ajax({
            type: "POST",
            url: 'https://mailgun.azurewebsites.net/api/enobio?code=d6AS5KrOTLoEbvv52t4CYBkAeqCwJCNB/fFVRJD6GD5UAqA9RBaf5A==',
            data: JSON.stringify(msg),

            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).done(function() {
            $('#emailMessage').text('Your email is on its way to us');
        }).fail(function(err) {
            if (err.status === 200) {
                $('#emailMessage').text('Your email is on its way to us');
            } else {
                $('#emailMessage').text('Opps, something is wrong. You can click the email icon bellow to contact us. ');
            }
        });
    });
});

$(window).resize(function() {
    $("section").height($(window).height() - 100);
})

setInterval(function() {
    var winWidth = $(window).width();
    if (winWidth < 1000) {
        $("section").height('auto');
        $(".slide").height('auto');
    }
}, 250);