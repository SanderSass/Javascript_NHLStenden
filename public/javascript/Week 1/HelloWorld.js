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

value = new HelloWorld();
document.getElementById("value").innerHTML = value.helloWorld();
