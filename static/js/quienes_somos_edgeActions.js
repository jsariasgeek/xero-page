
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_play}","click",function(sym,e){sym.play(2500);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2005,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_repetir-03}","click",function(sym,e){sym.play(3000);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'play'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){this.play("loop");});
//Edge binding end
})("play");
//Edge symbol end:'play'

//=========================================================

//Edge symbol: 'reproducir'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_play2}","mouseover",function(sym,e){sym.play("entrada");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10250,function(sym,e){sym.stop("4000");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11500,function(sym,e){var myVariable=sym.getVariable("sobre");sym.stop("sobre");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12500,function(sym,e){sym.stop("sobre");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play2}","click",function(sym,e){sym.play("click");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",14250,function(sym,e){sym.stop(14250);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play2}","mouseenter",function(sym,e){});
//Edge binding end
})("reproducir");
//Edge symbol end:'reproducir'

//=========================================================

//Edge symbol: 'col1'
(function(symbolName){})("col1");
//Edge symbol end:'col1'

//=========================================================

//Edge symbol: 'doctor'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){this.play("loop");});
//Edge binding end
})("doctor");
//Edge symbol end:'doctor'

//=========================================================

//Edge symbol: 'logof'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){this.play("loop");});
//Edge binding end
})("logof");
//Edge symbol end:'logof'

//=========================================================

//Edge symbol: 'SLOGAN'
(function(symbolName){})("SLOGAN");
//Edge symbol end:'SLOGAN'

//=========================================================

//Edge symbol: 'som'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",49308,function(sym,e){sym.play(44692);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",44692,function(sym,e){});
//Edge binding end
})("som");
//Edge symbol end:'som'
})(jQuery,AdobeEdge,"EDGE-38250192");