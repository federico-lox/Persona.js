/**
 * Persona.js
 *
 * @author Federico "Lox" Lucignano <http://plus.ly/federico.lox>
 *
 * @see http://github.com/federico-lox/Persona.js
 **/

function Persona(){}
function Trait(definition){
	this.characterize = definition.characterize;
	this.behave = definition.behave;
}

Persona.describe = function(){
	var persona = function(info){
		var characterize,
		x = 0,
		t = this.traits,
		y = t.length;
		
		for(; x < y; x++){
			characterize = t[x].characterize;
			
			if(characterize)
				characterize(this, info);
		}
	},
	behave,
	x = 0,
	y = arguments.length;
	
	persona.prototype = new Persona();
	persona.prototype.traits = arguments;
	
	for(; x < y; x++){
		behave = arguments[x].behave;
		
		if(behave)
			behave(persona.prototype);
	}
	
	return persona;
};