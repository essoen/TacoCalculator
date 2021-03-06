if (Meteor.isClient) {
    Session.set("numberOfPeople", 9001);

    Template.calc.ingridients = function() {
        var numPeople = Session.get("numberOfPeople");
        if (!numPeople)
                return "<h4>Du har ikke oppgitt antall personer ennå.</h4>";
        if (numPeople < 0)
            return "<h4>Hva er det du tror du gjør? Slutt å være så negativ. </h4>";
        var data = "<li>"+ Math.ceil(150*numPeople/400) + " pakker kjøttdeig (á 400 gram)</li>";
        data += "<li> " + Math.ceil(2.5*numPeople) + " STORE tacolefser</li>";
        data += "<li> " + Math.ceil(0.5*numPeople) + " pakker tacokrydder</li>";
        data += "<li> " + Math.ceil(0.25*numPeople) + " pakker bacon</li>";
        data += "<li> " + Math.ceil(0.4*numPeople )+ " tomater</li>";
        data +="<li> " +  Math.ceil((1/15)*numPeople) + " agurker</li>";
        data += "<li> " + Math.ceil((1/12)*numPeople) +" pakker isbergsalat</li>";
        data += "<li> " + Math.ceil(25*numPeople) + " gram mais</li>";
        data +="<li> " +  Math.ceil((1/12)*numPeople) + " paprika</li>";
        data += "<li> " + Math.ceil((1/6) *numPeople )+ " bokser rømme </li>";
        data += "<li> " + Math.ceil((1/12)*numPeople )+ " rødløk</li>";
        data +="<li> " +  Math.ceil((1/8)*numPeople) + " store poser med tortillachips</li>";
        data += "<li> Også trenger du selvsagt ost," + (numPeople > 30 ? " men vi er usikre når dere er så mange. Minst en kilo i alle fall!"
                : (numPeople>=15  ? " omkring 1 kilo bør holde." : " omkring en halv kilo er nok.")) + "</li>";
        data += "<h5>Hvis du er i tvil om noe, er det alltid best å ta med ekstra.</h5>";
        return data;
    };

    Template.calc.events({
        'keyup #numPeople' : function(event, template) {
                Session.set("numberOfPeople", template.find("#numPeople").value); // Gets value and updates data
        }
    });
}

if (Meteor.isServer) {
      Meteor.startup(function () {
            // Nothing to do.
    });
}
