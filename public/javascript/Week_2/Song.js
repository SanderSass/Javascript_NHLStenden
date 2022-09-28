class Song
{
	Song(){}

    displaySong()
    {
       var line = "";

       for(var i = 99; i >= 0; i--)
       {
	       	var cntr = i - 1;
	       	if(i == 1)
	       	{
	       		line += i + " bottle of beer on thw wall, " + i + " bottle of beer<br>Take one down and pass it around,no more bottles of beer on the wall<br><br>";
	       	}

	       	else if( i == 0)
	       	{
	       		line += " No more bottles of beer on the wall, no more bottles of beer.<br> Go to the store and buy some more, 99 bottles of beer on the wall.<br><br> ";
	       	}

	       	else if( i > 1)
	       	{
	       		line += i + " bottles of beer on the wall, " + i + " bottles of beer.<br> Take one down and pass it around, " + cntr + " bottle of beer on the wall<br><br>";
	       	}
       }
       return line;
    }
}

song = new Song();