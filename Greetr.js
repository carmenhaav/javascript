/**
 * Created by carmenhaav on 23/01/2017.
 */
// luuakse function literal, mida ei kutsuta välja, kõik, mis jääb/läheb sisse - toimib koheselt
(function(global, $) {

    // luuakse objekt
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    // luuakse prototüüp (sisse tulevad meetodid, mis vähendavad koodi mahukust)
    Greetr.prototype = {};

    // luuakse Greetr objekt, mis lubab teha uusi objekte, kasutamata 'new' võtmesõna/operaatorit
    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    // koodilühendus, ei pea kirjutama 'new' iga kord
    Greetr.init.prototype = Greetr.prototype;

    // Greetr objekt seotakse globaalse keskkonnaga ja Greetr lühendatakse $G, et koodi/aja kokkuhoiuks
    global.Greetr = global.G$ = Greetr;


}(window, jQuery));