fetch("../harshada/navbar.html").then(res=>res.text()).then(data=>document.getElementById("home-navbar").innerHTML=data);