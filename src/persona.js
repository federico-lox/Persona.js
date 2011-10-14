/**
 * Persona.js
 *
 * @author Federico "Lox" Lucignano <federico.lox(at)gmail.com>
 *
 * @see http://github.com/federico-lox/Persona.js
 **/

function Persona(){}
function Trait(definition){
  this._definition = definition;
  this.getFeatures = function(){return this._definition.features;};
  this.getBehaviours = function(){return this._definition.behaviours;};
}

Persona.describe = function(){
  var persona = function(){
    var features;
    
    for(var x = 0, t = this.traits, y = t.length; x < y; x++)
      if(features = t[x].getFeatures()) features.apply(this, arguments);
  },
  behaviours;
  
  persona.prototype = new Persona();
  persona.prototype.traits = arguments;
  
  for(var x = 0, y = arguments.length; x < y; x++)
    if(behaviours = arguments[x].getBehaviours()) behaviours.apply(persona.prototype);
  
  return persona;
};