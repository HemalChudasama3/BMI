var weight, height, measure, bmi, error ;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Please enter some values";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	var resultElement = document.getElementById("results");

    if (bmi <= 18.4) {
        measure = "Your BMI is " + bmi + " which means " + "you are Underweight";
        resultElement.style.color = "#fffbfe"; 
        resultElement.style.borderColor = "#e0be00";
		resultElement.style.backgroundColor = "#e0be00"; 
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        measure = "Your BMI is " + bmi + " which means " + "You are Normal";
        resultElement.style.color = "#fffbfe"; 
        resultElement.style.borderColor = "#008000"; 
        resultElement.style.backgroundColor = "#008000"; 
    } else if (bmi >= 25 && bmi <= 29.9) {
        measure = "Your BMI is " + bmi + " which means " + "You are Overweight";
        resultElement.style.color = "#fffbfe";
        resultElement.style.borderColor = "#ad3a00";
		resultElement.style.backgroundColor = "#ad3a00";
    } else if (bmi >= 30) {
        measure = "Your BMI is " + bmi + " which means " + "You are Obese";
        resultElement.style.color = "#fffbfe";
        resultElement.style.borderColor = "#e00000";
		resultElement.style.backgroundColor = "#e00000";
    }
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}