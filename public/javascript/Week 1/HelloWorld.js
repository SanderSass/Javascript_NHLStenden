class HelloWorld{
    constructor(){
        this.word = "Hello World"
    }
    helloWorld(){
        let result;
        result = this.word;
        return result;
    }
}
// var value
// value = HelloWorld().helloWorld();
value = new HelloWorld();
document.getElementById("value").innerHTML = value.helloWorld();
