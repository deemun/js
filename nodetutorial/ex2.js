var nums = process.argv.slice(2);
var sum = 0;

// nums.forEach(function (num) {
// 	sum += Number(num)
// })

for (var i = 0; i < nums.length; i++) {
	sum += Number(nums[i])
}			
// creating a variable called i, setting the loop to go nums.length times


console.log(sum)
