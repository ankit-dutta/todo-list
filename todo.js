const inp = document.getElementById("inp");
const btn = document.getElementById("addTodo");
const list = document.getElementById("list");

btn.onclick = function (e) {
  const todoText = inp.value;
  const li = document.createElement("li");
  li.innerText = todoText;

  const bin = document.createElement("i");
  bin.classList = "fas fa-trash";
  bin.style.marginLeft = "80%";

  list.style.width = "50%";
  list.style.marginLeft = "12rem";
  list.style.textAlign = "left";
  list.style.fontSize = "25px";

  li.append(bin);

  bin.onclick = function (e) {
    console.log(e.target);
    e.target.parentNode.remove();
  };

  list.append(li);

  inp.value = "";
};
