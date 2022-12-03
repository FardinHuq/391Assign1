const quoteText = document.querySelector(".quote"),
  authorName = document.querySelector(".author .name"),
  quoteBtn = document.querySelector("button");

function randomQuote() {
  quoteBtn.classList.add("pleasewait");
  quoteBtn.innerText = "Please wait...";
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("pleasewait");
    });
}

quoteBtn.addEventListener("click", randomQuote);

document.querySelectorAll(".controls > button").forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "Lime Green":
        document.querySelector(".card").style.backgroundColor = "limegreen";
        document.querySelector(".card").style.color = "white";
        break;
      case "Yellow":
        document.querySelector(".card").style.backgroundColor = "yellow";
        document.querySelector(".card").style.color = "black";
        break;
      case "Orange":
        document.querySelector(".card").style.backgroundColor = "orange";
        document.querySelector(".card").style.color = "white";
        break;
      case "Sky Blue":
        document.querySelector(".card").style.backgroundColor = "skyblue";
        document.querySelector(".card").style.color = "white";
        break;
      default:
        document.querySelector(".card").style.backgroundColor = "white";
        document.querySelector(".card").style.color = "black";
        break;
    }
  });
});

document.querySelector("#convert").addEventListener("click", (e) => {
  const input = Number.parseInt(
    document.querySelector("#converter-input").value
  );
  if (!Number.isNaN(input)) {
    switch (document.querySelector("#conversionType").value) {
      case "to_pound":
        document.querySelector(".output").innerText = `${input} Kilo Gram = ${
          input / 0.45359237
        } Pound`;
        break;
      case "to_kg":
        document.querySelector(".output").innerText = `${input} Pound = ${
          input * 0.45359237
        } Kilo Gram`;
        break;
      default:
        break;
    }
  } else alert("Please input a valid number.");
});


document.querySelector('p > input#minmax-input').addEventListener('keyup', e => {
    if (e.target.value) {
    input = e.target.value.split(',')
    input = input.map(elem => Number.parseInt(elem))
    input = input.filter(elem => !Number.isNaN(elem))
    console.log(input);
    document.querySelector('#max-output').innerText = Math.max(...input)
    document.querySelector('#min-output').innerText = Math.min(...input)
    let sum = input.reduce((partialSum, a) => partialSum + a, 0);
    document.querySelector('#sum-output').innerText = sum
    document.querySelector('#avg-output').innerText = sum / input.length
    document.querySelector('#rev-output').innerText = input.reverse()
    }
})

function clearAll() {
  document.getElementById("magic").value = '';
}

function capitalize() {
  var resU = document.getElementById("magic").value.toUpperCase();
  var resL = document.getElementById("magic").value.toLowerCase();
  if (document.getElementById("caps").value == "OFF") {
      document.getElementById("caps").value = "ON";
      document.getElementById("magic").value = resU;
  }

  else if (document.getElementById("caps").value == "ON") {
      document.getElementById("caps").value = "OFF";
      document.getElementById("magic").value = resL;
  }

}

var allLinesArr;
function sortLines() {
  var allLines = document.getElementById("magic").value;
  allLinesArr = allLines.split('\n');
  allLinesArr.sort();
  document.getElementById("magic").value = allLinesArr.join("\r\n");

}

function reverseLines() {
  var allLines = document.getElementById("magic").value;
  allLinesArr = allLines.split('\n');
  for (var j = 0; j < allLinesArr.length; j++) {
      var splitArr = allLinesArr[j].split(" ").reverse().join(" ");
      allLinesArr[j] = splitArr;
  }
  document.getElementById("magic").value = allLinesArr.join("\r\n");

}

// allLinesArr.reverse();

function stripBlank() {
  var allLines = document.getElementById("magic").value;
  allLinesArr = allLines.split("\n");
  var arr = allLinesArr.filter(Boolean);
  array = arr.map(el => el.trim());
  document.getElementById("magic").value = array.join("\r\n");

}

function addLineNumbers() {

  var allLines = document.getElementById("magic").value;
  allLinesArr = allLines.split('\n');
  for (var j = 0; j < allLinesArr.length; j++) {
      allLinesArr[j] = j + 1 + ". " + allLinesArr[j];
  }
  document.getElementById("magic").value = allLinesArr.join("\r\n");

}

function shuffle() {
  var allLines = document.getElementById("magic").value;
  allLinesArr = allLines.split('\n');
  for (let i = allLinesArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [allLinesArr[i], allLinesArr[j]] = [allLinesArr[j], allLinesArr[i]];
  }
  document.getElementById("magic").value = allLinesArr.join("\r\n");
}