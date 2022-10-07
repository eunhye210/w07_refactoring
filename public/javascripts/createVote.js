function showMessage(count) {
  if (count < 1) {
    document.getElementById("optionRule").style.display = "block";
  } else {
    document.getElementById("optionRule").style.display = "none";
  }
}

function deleteOption(node) {
  const parentNode = node.parentNode;
  const optionList = document.getElementById("optionList");
  optionList.removeChild(parentNode);

  const ulElementCount = document.getElementById("optionList").childElementCount;
  showMessage(ulElementCount - 1);
}

function addList() {
  const addValue = document.getElementById("addValue").value;
  const divElement = document.createElement("div");
  const inputElement = document.createElement("input");
  const deleteElement = document.createElement("input");

  divElement.setAttribute("class", "options");
  inputElement.setAttribute("name", "option");
  inputElement.setAttribute("class", "option");
  inputElement.setAttribute("value", addValue);
  inputElement.setAttribute("readonly", true);
  deleteElement.setAttribute("type", "button");
  deleteElement.setAttribute("class", "delete");
  deleteElement.setAttribute("value", "delete");
  deleteElement.setAttribute("onClick", "deleteOption(this)");

  divElement.appendChild(inputElement);
  divElement.appendChild(deleteElement);

  const elementCount = document.getElementById("optionList").childElementCount;
  showMessage(elementCount);

  document.getElementById("addValue").value = "";
  document.getElementById("optionList").appendChild(divElement);
}
