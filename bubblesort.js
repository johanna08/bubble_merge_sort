function bubbleSort(array) {
	var swaps = true;
	var index = 0;
	if ( array.length === 0 ){
		return [];
	}
	while (swaps){
		swaps = false;
		for (var i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]){
				[ array[i], array[i + 1]] =  [array[i + 1] , array[i]];
				swaps = true;
			}
		}
	}
	return array;

}