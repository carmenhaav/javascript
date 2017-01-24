/**
 * Created by carmenhaav on 23/01/2017.
 */
// luuakse objekt, ei pea kasutama 'new' ($G)
var g = G$('John', 'Doe');

// ahelmeetodite kasutamine
g.greet().setLang('es').greet(true).log();

// click funktsiooni kasutamine sisselogimis nupu jaoks
$('#login').click(function() {

    // uus objekt
    var loginGrtr = G$('John', 'Doe');

    // login peitmine (pole aadressireal näha)
    $('#logindiv').hide();

    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});