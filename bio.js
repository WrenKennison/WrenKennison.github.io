splash = new Array();

splash[0] = "<p><i>WREN KENNISON</i> is a musician from DURHAM, NC. <br>I am in a <a href='https://lepsiusxxiv.bandcamp.com/'>band.</a></p>";
splash[1] = "<p>very, very, very shy.<br>I am in a <a href='https://lepsiusxxiv.bandcamp.com/'>band.</a></p>";
splash[2] = "<p>very, very, very shy.<br>I am in a <a href='https://lepsiusxxiv.bandcamp.com/'>band.</a></p>";



RandomNumber = Math.floor(Math.random() * splash.length);
//Math.floor(Math.random() * splash.length)

document.write(splash[RandomNumber]);