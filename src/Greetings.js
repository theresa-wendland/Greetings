(function(global, $){

    // generate a greeting object so we don't have to say new on every use 
    var Greeting = function(firstName, lastName, language) {
        return new Greeting.init(firstName, lastName, language);
    }

    var supportedLangs = ['en', 'es'];

    var informalGreetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in', 
        es: 'Inicio Sesion'
    }

    // methods available on Greeting
    Greeting.prototype = {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        },

        validate: function () {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Language not supported"
            }
        }, 

        informalGreet: function () {
            return informalGreetings[this.language] + ' ' + this.firstName + '!';
        }, 

        formalGreet: function () {
            return formalGreetings[this.language] + ', ' + this.fullName();
        }, 

        // chainable methods

        log: function () {
            if(console) {
                console.log(logMessages[this.language] + ':' + this.fullName())
            }
            // this refers to the calling object at execution time which allows for chainable methods 
            return this;
        }, 

        greet: function (formal) {
            var msg; 

            if(formal) {
                msg = this.formalGreet();
            } else {
                msg = this.informalGreet();
            }

            console.log(msg)

            // this refers to the calling object at execution time which allows for chainable methods 
            return this;
        },

        setLang: function (lang) {
            this.language = lang; 
            this.validate()
            return this;
        }, 

        // jQuery dependant method 
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery is need to use this method';
            }

            if (!selector) {
                throw 'Missing Selector'
            }

            var msg; 
            if (formal) {
                msg = this.formalGreet();
            } else {
                msg = this.informalGreet();
            }

            $(selector).html(msg);
            return this;
        }

    };

    Greeting.init = function(firstName, lastName, language){

        // build the object that will be return by the Greeting funtion 
        // self will point to the new object ceated by the return in the freeting function

        var self = this; 
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
        self.validate();

    }

    // ensure any object created using greeting will point to the right prototype chain to access available methods
    Greeting.init.prototype = Greeting.prototype;

    // expose the Greeting function to so it can be called and add an alias for ease of typing 
    global.Greeting = global.Greet$ = Greeting;

}(window, jQuery));