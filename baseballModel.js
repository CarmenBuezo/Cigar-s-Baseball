// $(document).ready(function() {
// $.get("https://cigarsbaseballserver.herokuapp.com/cigarsbaseball/roster", function(data) {
// 	//console.log(data);
// 	var myData = JSON.parse(data);
// 	var len = myData.length;
// 	//console.log(len);
// 	for(i = 0; i < len; i++) {
// 		if(myData[i].position.includes("OF")) {
// 			console.log(myData[i].position);
// 			$('#result').append(myData[i].position + ' ' + myData[i].name);
// 		}
// 	}
// });
// });


//make div inside of loop function do a create and then append for each 

$(document).ready(function() {
$.get("https://cigarsbaseballserver.herokuapp.com/cigarsbaseball/roster", function(data) {
	//console.log(data);
	var myData = JSON.parse(data);
	var len = myData.length;
	//console.log(len);
	for(i = 0; i < len; i++) {
		var output = []
		if(myData[i].position.includes("OF")) {
			//var result = myData[i].position;
			$('#result').append(myData[i].picture + "<br>" + myData[i].name + " - " + myData[i].position);

		};
	};
});
});