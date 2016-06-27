
Output numbers from 100 to 1 (in reverse order). 
But for multiples of three print "Lighthouse" instead of 
the number and for the multiples of five print "Labs". 
For numbers which are multiples of both three and five 
print "Lighthouse Labs".




var points = new Array(100);
for (var i = 0; i < 100; i++) {
    points[i] = i + 1; //This populates the array.  +1 is necessary because arrays are 0 index based and you want to store 1-100 in it, NOT 0-99.
}

for (var i = 100; i > 0; i--) 
{
	
	if( i % 3==0 && i % 5==0 ) 
	{
    	console.log("Lighthouse Labs");
	} else if ( i % 3 == 0 ) 
    {
        console.log("lighthouse");
    }
    else if( i % 5 == 0 ) 
    {
        console.log("labs");
    }
	else 
	{	console.log(i);
	}

     //This prints the values that you stored in the array
}