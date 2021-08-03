function bmiCalculator (weight, height) {
    var bmi = weight/(height*height);
    var index;
    if (bmi < 18.5) {
  index = "are underweight.";
} else if (bmi > 18.5 && bmi < 24.9) {
  index = "have a normal weight.";
} else if (bmi > 24.9) {
  index = "are a overweight.";
}
 var interpretation = "Your BMI is "+bmi+", so you "+index  ; 
    
    return interpretation;
}
console.log(bmiCalculator(100,2));