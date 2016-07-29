function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  var firstHalf = wholeArray.slice(0, wholeArray.length / 2);
  var secondHalf = wholeArray.slice(wholeArray.length / 2);
  
  return [firstHalf, secondHalf];
}

function mergeSort(array) {
	//base case
	if ( array.length === 1 ){
		return array;
	} else {
		//keep splitting down to length 1
		var splitArr = split(array);
		return merge([mergeSort(splitArr[0]), mergeSort(splitArr[1])])
	}
}

function merge(array){
	var arr1 = array[0];
	var arr2 = array[1]; 
	var sortedArr = [];
	//[4,5] , [1,2,3];
	//[5] []
	while(arr1.length && arr2.length) {
		if (arr1[0] <= arr2[0]) {
			sortedArr.push(arr1.shift());
		} else {
			sortedArr.push(arr2.shift());
		} 
	}
	return sortedArr.concat(arr1.concat(arr2));
}

