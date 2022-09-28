class Calculator
{
	constructor(fdigit,sdigit)
	{
		this._firstDigit = fdigit;
		this._secondDigit = sdigit;	
	
	}


	get firstDigit()
	{
		return _firstDigit;
	}

	get secondDigit()
	{
		return _secondDigit;
	}

	set firstDigit(fdigit)
	{
		this._firstDigit = fdigit;
	}

	set secondDigit(sdigit)
	{
		this._secondDigit = sdigit;
	}

	adding()
	{
		
		document.getElementById("result").innerHTML = Number(this._firstDigit) + Number(this._secondDigit);
	}

	substracting()
	{
		document.getElementById("result").innerHTML = Number(this._firstDigit) - Number(this._secondDigit);
	}

	multiplying()
	{
		document.getElementById("result").innerHTML = Number(this._firstDigit) * Number(this._secondDigit);
	}

	dividing()
	{
		document.getElementById("result").innerHTML = Number(this._firstDigit) / Number(this._secondDigit);
	}


    // C part
	root()
	{
		document.getElementById("result").innerHTML = Math.sqrt(Number(this._firstDigit));
	}

	involution()
	{
		var power = Number(document.getElementById("pow").value);
		document.getElementById("result").innerHTML = Math.pow(this._firstDigit,power);
	}
}