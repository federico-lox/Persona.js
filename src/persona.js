/**
 * Persona.js
 *
 * @author Federico "Lox" Lucignano <federico.lox(at)gmail.com>
 *
 * LICENSE
 * Copyright (c) 2011 Federico "Lox" Lucignano
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
 * is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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