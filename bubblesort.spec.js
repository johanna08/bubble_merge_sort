describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('bubble sorts', function(){
    expect( bubbleSort([ 1, 2, 4, 3, 6, 5]) ).toEqual( [ 1, 2, 3, 4, 5, 6] );
  });

  // describe("A spy", function() {

  // beforeEach(function() {
  // 	var swaps = 0;
  // 	var compares = 0;
    
  // });

});