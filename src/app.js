var example = Greet$('Stacy', 'Brown')


// exmaple chaining methods 
example.greet().setLang('es').greet(true);

// jQuery dependency example 

$('#login').click(function() {
    
    // pretend we got this info back from the user when they hit log in
    var loginGreeting = Greet$('Jeff', 'Brown');

    // pretend we loaded another page 
    $('#logindiv').hide();

    // get the value from the input using jQuery and chain our HTMLGreeting method from the greetings library  
    loginGreeting.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

})



