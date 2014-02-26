if (Meteor.isClient) {
        Session.set("numberOfPeople", 1); 
        Handlebars.registerHelper('breaklines', function(descriptionFunction) {
                    text = descriptionFunction();
                    text = Handlebars.Utils.escapeExpression(text);
                    text = text.toString();
                    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
                    return new Handlebars.SafeString(text);
        });

        Template.calc.ingridients = function() {
                var numPeople = Session.get("numberOfPeople");
                if (!numPeople)
                        return "<br>Du har ikke oppgitt antall personer ennå."; 
                var data = "<li>"+ Math.ceil(200*numPeople) + " gram kjøttdeig</li>";
                data += "<li> " + Math.ceil(2.5*numPeople) + " STORE tacolefser</li>";
                data += "<li> " + Math.ceil(0.5*numPeople) + " pakker tacokrydder</li>";
                data += "<li> " + Math.ceil(0.25*numPeople) + " bacon</li>";
                data += "<li> " + Math.ceil(0.5*numPeople )+ " tomater</li>";
                data +="<li> " +  Math.ceil(0.25*numPeople) + " agurker</li>";
                data += "<li> " + Math.ceil((1/8)*numPeople) +" pakker Isbergsalat</li>"; 
                data += "<li> " + Math.ceil(100*numPeople) + " gram mais</li>"; 
                data +="<li> " +  Math.ceil((1/8)*numPeople) + " paprika</li>";
                data += "<li> " + Math.ceil((1/6) *numPeople )+ " bokser rømme </li>";
                data += "<li> " + Math.ceil((1/6)*numPeople )+ " rødløk</li>";
                data +="<li> " +  Math.ceil((1/8)*numPeople) + " store poser med tortillachips</li>";
                return data; 
        }

        Template.calc.events({
                'change #numPeople' : function(event, template) {
                        Session.set("numberOfPeople", template.find("#numPeople").value);
        }
        })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
