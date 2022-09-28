(function(global, $){


    // generate a greeting object so we don't have to say new on every use 
    var Greeting = function(firstName, lastName, language) {
        return new Greeting.init(firstName, lastName, language);
    }

    // methods available on Greeting
    Greeting.prototype = {};

    Greeting.init = function(firstName, lastName, language){

        // build the object that will be return by the Greeting funtion 
        // self will point to the new object ceated by the return in the freeting function

        var self = this; 
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    // ensure any object created using greeting will point to the right prototype chain to access available methods


    // expose the Greeting function to so it can be called and add an alias for ease of typing 
    global.Greeting = global.Greet$ = Greeting;

}(window, jQuery));