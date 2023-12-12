function menushow()

{  
    document.getElementById("pic").style.display="none"; 
    document.getElementById("projects").style.visibility="hidden";
    document.getElementById("menuitems").style.display="block";
    document.getElementById("j").style.display="none";
    document.getElementById("About").style.display="none";
   
    setTimeout(calltabs,100);
    }
    function menuhide()
    {
        document.getElementById("menuitems").style.transition = "all 0.3s";
        document.getElementById("menuitems").style.display="none";
        document.getElementById("j").style.display="block";
        setTimeout(calltabsclose,100);
    }
    function calltabs()
    {
        document.getElementById("product").style.display="block";
        document.getElementById("logout").style.display="block";
        document.getElementById("profile").style.display="block";
       
        }
        function calltabsclose()
        {
            document.getElementById("product").style.display="none";
            document.getElementById("logout").style.display="none";
            document.getElementById("profile").style.display="none";
           
        }
function ShowProj()
{   document.getElementById("j").style.display="block";
    document.getElementById("projects").style.visibility="visible";
    document.getElementById("menuitems").style.display="None";
    document.getElementById("About").style.display="none";
    document.getElementById("menuitems").style.transition = "all 0.8s";
    document.getElementsByClassName("j").style.visibility="Visible";
}
function ShowAbout()
{
    document.getElementById("menuitems").style.display="none";
    document.getElementById("About").style.display="block";
    document.getElementById("j").style.display="block";
    document.getElementById("pic").style.display="block";
}

function hide()
{
    document.getElementById("menuitems").style.display="None";
}