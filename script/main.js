

/*





window.onscroll = function () { 

  var myNav = document.getElementById('navbar-nav');

  var myIcon = document.getElementsByTagName('img')[2];

  var myimg = document.getElementById('logotxt');

  console.log("hi yoseph");

    "use strict";

    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {

        myNav.classList.add("nav-colored");

        myNav.classList.remove("nav-transparent");

        myIcon.classList.add("imgshow");

        myIcon.classList.remove('imghide');

        myimg.classList.add('brand-icon-hide');

    } 

    else {

        myNav.classList.add("nav-transparent");

        myNav.classList.remove("nav-colored");

        myIcon.classList.add("imghide");

        myIcon.classList.remove('imgshow');

        myimg.classList.remove('brand-icon-hide');

    }

};

*/



/*window.onscroll = function() {scrollFunction()};

*/

//how to acces css values

/*function scrollFunction() {

var myElement = document.getElementById('logo');



var n = getComputedStyle(myElement);

var num = 25;

var mnum = n.width.slice(0,2);

var nn = mnum +num;

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

    document.getElementById("logo").style.width = mnum.toString()+"px";

    

  } else {

  document.getElementById("logo").style.width = nn.toString()+"px";

   console.log(n.width);

  }

}*/



/*function scrollFunction() {



if (window.innerWidth>1000) {

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

    document.getElementById('pushLeft').style.backgroundColor="#000000FF";

  } else {

  document.getElementById('pushLeft').style.backgroundColor="#0000004C";

  }

}else{

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

    document.getElementById('pushLeft').style.backgroundColor="#000000FF";

  } else {

  document.getElementById('pushLeft').style.backgroundColor="#0000004C";

  }

}

 

}*/
