console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = ['celery', 'peanutbutter']
const maxItems = 5;


function addItem(item) { //add item function
  basket.push(item)
  return true;
}
console.log("Before adding item:" + basket.length);
console.log(addItem('fish'));
console.log("the basket is now:", basket);
console.log("After adding item:" + basket.length);
//end of add item

//start of listItems
function listItems() {
  console.log("Inside listItems():" + basket.length);
  for (let i = 0; i < basket.length; i++){
    console.log((basket[i]));
  }
  return;
}
console.log(listItems());
//end of listItems


function isFull() {

}
