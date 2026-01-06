function saveData() {
  const key = document.getElementById("key").value;
  const value = document.getElementById("value").value;

  localStorage.setItem(key, value);
  document.getElementById("output").innerText = "Data saved successfully";
}

function loadData() {
  const key = document.getElementById("key").value;
  const value = localStorage.getItem(key);

  document.getElementById("output").innerText =
    value ? value : "No data found";
}
