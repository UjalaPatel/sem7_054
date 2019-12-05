
var emitter = require('events').EventEmitter;

function clock() {
    var e = new emitter();
    
    setInterval(function () {
        
        var date = new Date();
		var h=date.getHours();
		var m=date.getMinutes();
		var s=date.getSeconds();

		m=(m<10?"0":"")+m;
		s=(s<10?"0":"")+s;
		console.log(h+":"+m+":"+s);
    }, 1000)
    console.log(Date());
    return e;
}
var lp = clock();
