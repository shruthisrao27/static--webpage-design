var menuBtn=document.getElementById("menuBtn");
var SideNav=document.getElementById("SideNav");
SideNav.style.right="-250px";
menuBtn.onclick=function()
{
    if(SideNav.style.right=="-250px")
    {
        SideNav.style.right="0";
    }
    else{
        SideNav.style.right="-250px";
    }
    var scroll = new SmoothScroll('a[href*="#"]');

}