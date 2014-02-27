if (Meteor.isClient) {
        Session.set("numberOfPeople", 9001);

        Template.calc.ingridients = function() {
                var numPeople = Session.get("numberOfPeople");
                if (!numPeople)
                        return "<br>Du har ikke oppgitt antall personer ennå."; 
                if (numPeople < 0)
                    return "Hva er det du tror du gjør? Slutt å være så negativ. ";
                if( isNaN(numPeople))
                    return "Vennligst bruk tall a, kis."; 
                var data = "<li>"+ Math.ceil(200*numPeople) + " gram kjøttdeig</li>";
                data += "<li> " + Math.ceil(2.5*numPeople) + " STORE tacolefser</li>";
                data += "<li> " + Math.ceil(0.5*numPeople) + " pakker tacokrydder</li>";
                data += "<li> " + Math.ceil(0.25*numPeople) + " pakker bacon</li>";
                data += "<li> " + Math.ceil(0.5*numPeople )+ " tomater</li>";
                data +="<li> " +  Math.ceil(0.25*numPeople) + " agurker</li>";
                data += "<li> " + Math.ceil((1/8)*numPeople) +" pakker isbergsalat</li>"; 
                data += "<li> " + Math.ceil(100*numPeople) + " gram mais</li>"; 
                data +="<li> " +  Math.ceil((1/8)*numPeople) + " paprika</li>";
                data += "<li> " + Math.ceil((1/6) *numPeople )+ " bokser rømme </li>";
                data += "<li> " + Math.ceil((1/6)*numPeople )+ " rødløk</li>";
                data +="<li> " +  Math.ceil((1/8)*numPeople) + " store poser med tortillachips</li>";
                return data; 
        }

        Template.calc.events({
                'keyup #numPeople' : function(event, template) {
                        Session.set("numberOfPeople", template.find("#numPeople").value);
                        return false;  // So it doesn't reload
        }
        })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
