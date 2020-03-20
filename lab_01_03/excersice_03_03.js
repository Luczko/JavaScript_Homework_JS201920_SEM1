// 3) Create an array (by hand) of objects and call sum() function in context of each one of them. Sum function is to come from this object  BaseObject = { X,y, sum: function (){ return this.x+this.y}}
let arr = [
  { x: 2, y: 3 },
  { x: -2, y: 6 },
  { x: 0, y: 8 }
];
BaseObject = {
  x: 0,
  y: 0,
  sum: function() {
    return this.x + this.y;
  }
};
for (let i = 0; i < arr.length; i++) {
  console.log(BaseObject.sum.call(arr[i]));
}
