// Print all elements till 100

//  var points = new Array(100);
//         for (var i = 0; i < 100; i++) {
//             points[i] = i + 1; //This populates the array.  +1 is necessary because arrays are 0 index based and you want to store 1-100 in it, NOT 0-99.
//         }
        
// console.log(points)



// arrayOfLight(x);
// for (var i = 0, i =< x, i++)



function arrayOfLight(x) {
	var array = [];
	for (i = 0; i <= x; i++) {
		array.push(i);
	}
	console.log(array);	
}

arrayOfLight(10);