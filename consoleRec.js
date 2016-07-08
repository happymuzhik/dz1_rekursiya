var consoleRec = function(array, index){
	if (!array || typeof array != 'object' || array.length == 0){ return 'Array is needed!'; }
	if (!index){index = 0;}
	if (index < array.length){
		console.log(array[index]);
		consoleRec(array, index+1);
	}
};
module.exports = consoleRec;