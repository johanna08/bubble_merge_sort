describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split( [5,4,3,2,1] ) ).toEqual( [ [5,4],[3,2,1] ] );

  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([[0,4] , [1,2,3]])).toEqual([0,1,2,3,4]);
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(mergeSort([4,3,2,1,0])).toEqual([0,1,2,3,4]);
  });
});
