/**
 * Created by carmenhaav on 23/01/2017.
 */
// luuakse function literal, mida ei kutsuta välja, kõik, mis jääb/läheb sisse - toimib koheselt
(function(global, $) {

    // luuakse objekt
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    // pole kättesaadav, see on peidus IIFE skoobi ahelas
    var supportedLangs = ['en', 'es'];

    //  keelte tervitustega objekt
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    // keelte tervitustega formaalne objekt
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    // sisse logitud sõnum
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };

    // luuakse prototüüp (sisse tulevad meetodid, mis vähendavad koodi mahukust)
    Greetr.prototype = {

        // 'this' viitab välja kutsutavale objektile sooritamise ajal
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        // tingimuslause, kui keel on invalid
        validate: function() {
            if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";
            }
        },

        // sõnumitagastus
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        // sõnumitagastus
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        // ahelmeetodid, tagastavad enda objekti
        greet: function(formal) {
            var msg;

            // tingimuslaused, kui väärtus on undefined või null, siis 'surutakse' valeks
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // teeb meetodi ahelaks
            return this;
        },


        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        // määrab keele ja valideerib selle
        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        }

        // jquery tingimuslaused
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            // sõnumite tingimuslaused
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            // sõnum läheb vastavasse HTML dokumendi objekti mudelisse
            $(selector).html(msg);
            // ahel
            return this;
        }
    };

    // luuakse Greetr objekt, mis lubab teha uusi objekte, kasutamata 'new' võtmesõna/operaatorit
    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    // koodilühendus, ei pea kirjutama 'new' iga kord
    Greetr.init.prototype = Greetr.prototype;

    // Greetr objekt seotakse globaalse keskkonnaga ja Greetr lühendatakse $G-ga koodi/aja kokkuhoiuks
    global.Greetr = global.G$ = Greetr;


}(window, jQuery));