const text = "Health Informatics • Machine Learning • Health Data Science";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 70);
  }
}

typeWriter();
