class Calculation{

    constructor()
    {
        this.number1 = 2;
        this.number2 = 4;
        this.number3 = 16;
    }

    addition()
    {
        let value = this.number1 + this.number2;
        return value;
    }

    subtraction()
    {
        let value = this.number3 - this.number2;
        return value;
    }

    multiplication(){
        let value = this.addition() * this.subtraction();
        return value;
    }
}
calc = new Calculation();
document.getElementById("calc1").innerHTML = "Addition: " + calc.addition();
document.getElementById("calc2").innerHTML = "Subtraction: " + calc.subtraction();
document.getElementById("calc3").innerHTML = "Multiplication: " + calc.multiplication();