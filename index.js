// object that hold the quantity for all items
const itemOne = {
  count: 1,
  count2: 1,
  count3: 1,
  prix1: 44,
  prix2: 50,
  prix3: 25,
  increment,
  decrement,
};

// function that will increase the quantity of a specific item

function increment(x, f, p) {
  this[x]++;
  document.getElementById(f).value = this[x];
  document.getElementById(p).innerHTML = this[x] * this[p];
}

// function that will decrease the quantity of a specific item

function decrement(x, f, p) {
  if (this[x] <= 0) return;
  this[x]--;

  document.getElementById(f).value = this[x];
  document.getElementById(p).innerHTML = this[x] * this[p];
}

// helper  function that will help increase the quantity of a specific item in the dom
function increase(x, f, p) {
  itemOne.increment(x, f, p);
}

// helper  function that will help decrease the quantity of a specific item in the dom

function decrease(x, f, p) {
  itemOne.decrement(x, f, p);
}

function remove(item) {
  const element = document.getElementById(item);
  element.remove();
}

function toggleLike(id) {
  let likeBtn = document.getElementById(id);
  likeBtn.style.color = "red";
}

function total() {
  console.log("Total");
  const res =
    itemOne.count * itemOne.prix1 +
    itemOne.prix2 * itemOne.count2 +
    itemOne.prix3 * itemOne.count3;

  document.getElementById("total").innerHTML = res;
  console.log(res);
}
