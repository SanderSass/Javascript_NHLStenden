class Fibonacci{

    calcFibonacci(){
        var fibArray = [0,1];	
        for (var i = 1; i <=18
            ; i++) {
            fibArray.push(fibArray[i] + fibArray[i-1]);
        }
        var fibString = fibArray.join();
        document.getElementById("fib").innerHTML = fibString;
    }
}
fib = new Fibonacci();
fib.calcFibonacci();