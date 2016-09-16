// random generator

var opt = ["opt1", "opt2", "opt3", "opt4", "opt5"];
	var output = document.getElementById('output');
	
		function test(e) {
		event.preventDefault()
		opt[0] = opt1.value;
		opt[1] = opt2.value;
		opt[2] = opt3.value;
		opt[3] = opt4.value;
		opt[4] = opt5.value;
		if (Math.floor(Math.random() * (5 - 1 + 1)) + 1 == 1) {
		output.innerHTML = opt[0];
		}
		else if (Math.floor(Math.random() * (5 - 1 + 1)) + 1 == 2) {
		output.innerHTML = opt[1];
		}
		else if (Math.floor(Math.random() * (5 - 1 + 1)) + 1 == 3) {
		output.innerHTML = opt[2];
		}
		else if (Math.floor(Math.random() * (5 - 1 + 1)) + 1 == 4) {
		output.innerHTML = opt[3];
		}
		else if (Math.floor(Math.random() * (5 - 1 + 1)) + 1 == 5) {
		output.innerHTML = opt[4];
		}
		};
		
// clock

function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
}
function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}