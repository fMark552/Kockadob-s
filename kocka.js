var dobas1
var dobas2
var dobas3
var dobas4
var dobas5

var dobas6
var dobas7
var dobas8
var dobas9
var dobas10

const max=6
var gombszam=0

var dobasharom3=document.getElementById("dobas")
var dobasszamlalo=0

var ide=document.getElementById("ide")

var alap1=document.getElementById("alap1")
var alap2=document.getElementById("alap2")
var alap3=document.getElementById("alap3")
var alap4=document.getElementById("alap4")
var alap5=document.getElementById("alap5")

var jatekoslista=[]
var geplista=[]

var newgame=document.getElementById("newgame")
var modal=document.getElementById("myModal")

var bezar1=document.getElementsByClassName("close1")[0]
var bezar2=document.getElementsByClassName("close2")[0]
var bezar3=document.getElementsByClassName("close3")[0]

var nextgame=document.getElementById("nextgame")
var next=document.getElementById("next")

var gepdobasszamlalo=0

var kocka1=document.getElementById("kocka1")
var kocka2=document.getElementById("kocka2")
var kocka3=document.getElementById("kocka3")
var kocka4=document.getElementById("kocka4")
var kocka5=document.getElementById("kocka5")

var szamlalo1=0
var kocka1=true
var szamlalo2=0
var kocka2=true
var szamlalo3=0
var kocka3=true
var szamlalo4=0
var kocka4=true
var szamlalo5=0
var kocka5=true

var szum1 = 0
var szum2 = 0 

var listahelye1=document.getElementById("listahelye1")
var listahelye2=document.getElementById("listahelye2")

function szabalyopen()
{
    document.getElementById("myForm").style.display = "block";
}
  
function szabalybezar() 
{
    document.getElementById("myForm").style.display = "none";
}

function dobasHAROM()
{
    dobasszamlalo++

    if(dobasszamlalo>=3)
    {
        dobasharom3.disabled=true
    }
}

function onkor()
{
    ide.innerHTML="AZ ÖN KÖRE"
}

function gepkor()
{
    ide.innerHTML="A GÉP KÖRE"
}

function egyes()
{
    szamlalo1++

    if(szamlalo1%2!=0)
    {
        kocka1=false
        console.log("false")
        alap1.style.visibility="hidden"
    }
    else
    {
        kocka1=true
        console.log("true")
        alap1.style.visibility="visible"
    }
}

function kettes()
{
    szamlalo2++

    if(szamlalo2%2!=0)
    {
        kocka2=false
        console.log("false")
        alap2.style.visibility="hidden"
    }
    else
    {
        kocka2=true
        console.log("true")
        alap2.style.visibility="visible"
    }
}

function harmas()
{
    szamlalo3++

    if(szamlalo3%2!=0)
    {
        kocka3=false
        console.log("false")
        alap3.style.visibility="hidden"
    }
    else
    {
        kocka3=true
        console.log("true")
        alap3.style.visibility="visible"
    }
}

function negyes()
{
    szamlalo4++

    if(szamlalo4%2!=0)
    {
        kocka4=false
        console.log("false")
        alap4.style.visibility="hidden"
    }
    else
    {
        kocka4=true
        console.log("true")
        alap4.style.visibility="visible"
    }
}

function otos()
{
    szamlalo5++

    if(szamlalo5%2!=0)
    {
        kocka5=false
        console.log("false")
        alap5.style.visibility="hidden"
    }
    else
    {
        kocka5=true
        console.log("true")
        alap5.style.visibility="visible"
    }
}

function kockadobas1()
{
    if(kocka1==true)
    {
        dobas1=Math.floor(Math.random()*max+1)
        console.log(dobas1)
    }

    if(dobas1==1)
    {
        alap1.src="egy.png"
    }
    if(dobas1==2)
    {
        alap1.src="ketto.png"
    }
    if(dobas1==3)
    {
        alap1.src="harom.png"
    }
    if(dobas1==4)
    {
        alap1.src="negy.png"
    }
    if(dobas1==5)
    {
        alap1.src="ot.png"
    }
    if(dobas1==6)
    {
        alap1.src="hat.png"
    }
}

function kockadobas2()
{
    if(kocka2==true)
    {
        dobas2=Math.floor(Math.random()*max+1)
        console.log(dobas2)
    }

    if(dobas2==1)
    {
        alap2.src="egy.png"
    }
    if(dobas2==2)
    {
        alap2.src="ketto.png"
    }
    if(dobas2==3)
    {
        alap2.src="harom.png"
    }
    if(dobas2==4)
    {
        alap2.src="negy.png"
    }
    if(dobas2==5)
    {
        alap2.src="ot.png"
    }
    if(dobas2==6)
    {
        alap2.src="hat.png"
    }
}

function kockadobas3()
{
    if(kocka3==true)
    {
        dobas3=Math.floor(Math.random()*max+1)
        console.log(dobas3)
    }

    if(dobas3==1)
    {
        alap3.src="egy.png"
    }
    if(dobas3==2)
    {
        alap3.src="ketto.png"
    }
    if(dobas3==3)
    {
        alap3.src="harom.png"
    }
    if(dobas3==4)
    {
        alap3.src="negy.png"
    }
    if(dobas3==5)
    {
        alap3.src="ot.png"
    }
    if(dobas3==6)
    {
        alap3.src="hat.png"
    }
}

function kockadobas4()
{
    if(kocka4==true)
    {
        dobas4=Math.floor(Math.random()*max+1)
        console.log(dobas4)
    }

    if(dobas4==1)
    {
        alap4.src="egy.png"
    }
    if(dobas4==2)
    {
        alap4.src="ketto.png"
    }
    if(dobas4==3)
    {
        alap4.src="harom.png"
    }
    if(dobas4==4)
    {
        alap4.src="negy.png"
    }
    if(dobas4==5)
    {
        alap4.src="ot.png"
    }
    if(dobas4==6)
    {
        alap4.src="hat.png"
    }
}

function kockadobas5()
{
    if(kocka5==true)
    {
        dobas5=Math.floor(Math.random()*max+1)
        console.log(dobas5)
    }

    if(dobas5==1)
    {
        alap5.src="egy.png"
    }
    if(dobas5==2)
    {
        alap5.src="ketto.png"
    }
    if(dobas5==3)
    {
        alap5.src="harom.png"
    }
    if(dobas5==4)
    {
        alap5.src="negy.png"
    }
    if(dobas5==5)
    {
        alap5.src="ot.png"
    }
    if(dobas5==6)
    {
        alap5.src="hat.png"
    }  
}

function mentes()
{
    if(kocka1==false)
    {
        jatekoslista.push(dobas1)
    }
    if(kocka2==false)
    {
        jatekoslista.push(dobas2)
    }
    if(kocka3==false)
    {
        jatekoslista.push(dobas3)
    }
    if(kocka4==false)
    {
        jatekoslista.push(dobas4)
    }
    if(kocka5==false)
    {
        jatekoslista.push(dobas5)
    }
}

function kovetkezo()
{
    if(kocka1==false)
    {
        alap1.style.visibility="hidden"
        //alap1.parentNode.removeChild(alap1)
    }
    if(kocka2==false)
    {
        alap2.style.visibility="hidden"
        //alap2.parentNode.removeChild(alap2)
    }
    if(kocka3==false)
    {
        alap3.style.visibility="hidden"
        //alap3.parentNode.removeChild(alap3)
    }
    if(kocka4==false)
    {
        alap4.style.visibility="hidden"
        //alap4.parentNode.removeChild(alap4)
    }
    if(kocka5==false)
    {
        alap5.style.visibility="hidden"
        //alap5.parentNode.removeChild(alap5)
    }
}

newgame.onclick=function() 
{
    modal.style.display="block"
}

nextgame.onclick=function()
{
    next.style.display="block"
}

bezar1.onclick = function() 
{
    modal.style.display = "none"
}

bezar2.onclick = function() 
{
    next.style.display = "none"
}

function gep()
{
    alap1.src="one.png"
    alap2.src="one.png"
    alap3.src="one.png"
    alap4.src="one.png"
    alap5.src="one.png"
}

function gepdobasharmadik()
{
    gepdobasszamlalo++

    if(gepdobasszamlalo>=1)
    {
        nextgame.disabled=true
        dobasharom3.disabled=true
    }
}

function gepdobas1()
{
    dobas6=Math.floor(Math.random()*max+1)
    console.log(dobas6)
    alap1.style.visibility="visible"

    if(dobas6==4)
    {
        alap1.src="four.png"
        geplista.push(dobas6)
    }
    if(dobas6==5)
    {
        alap1.src="five.png"
        geplista.push(dobas6)
    }
    if(dobas6==6)
    {
        alap1.src="six.png"
        geplista.push(dobas6)
    }  

    if(dobas6<4)
    {
        dobas6=Math.floor(Math.random()*max+1)
        console.log(dobas6)

        if(dobas6==4)
        {
            alap1.src="four.png"
            geplista.push(dobas6)
        }
        if(dobas6==5)
        {
            alap1.src="five.png"
            geplista.push(dobas6)
        }
        if(dobas6==6)
        {
            alap1.src="six.png"
            geplista.push(dobas6)
        } 

        if(dobas6<4)
        {
            dobas6=Math.floor(Math.random()*max+1)
            console.log(dobas6)

            if(dobas6==1)
            {
                alap1.src="one.png"
                geplista.push(dobas6)
            }
            if(dobas6==2)
            {
                alap1.src="two.png"
                geplista.push(dobas6)
            }
            if(dobas6==3)
            {
                alap1.src="three.png"
                geplista.push(dobas6)
            }
            if(dobas6==4)
            {
                alap1.src="four.png"
                geplista.push(dobas6)
            }
            if(dobas6==5)
            {
                alap1.src="five.png"
                geplista.push(dobas6)
            }
            if(dobas6==6)
            {
                alap1.src="six.png"
                geplista.push(dobas6)
            } 
        }
    }
}

function gepdobas2()
{
    dobas7=Math.floor(Math.random()*max+1)
    console.log(dobas7)
    alap2.style.visibility="visible"

    if(dobas7==4)
    {
        alap2.src="four.png"
        geplista.push(dobas7)
    }
    if(dobas7==5)
    {
        alap2.src="five.png"
        geplista.push(dobas7)
    }
    if(dobas7==6)
    {
        alap2.src="six.png"
        geplista.push(dobas7)
    }  

    if(dobas7<4)
    {
        dobas7=Math.floor(Math.random()*max+1)
        console.log(dobas7)

        if(dobas7==4)
        {
            alap2.src="four.png"
            geplista.push(dobas7)
        }
        if(dobas7==5)
        {
            alap2.src="five.png"
            geplista.push(dobas7)
        }
        if(dobas7==6)
        {
            alap2.src="six.png"
            geplista.push(dobas7)
        } 

        if(dobas7<4)
        {
            dobas7=Math.floor(Math.random()*max+1)
            console.log(dobas7)

            if(dobas7==1)
            {
                alap2.src="one.png"
                geplista.push(dobas7)
            }
            if(dobas7==2)
            {
                alap2.src="two.png"
                geplista.push(dobas7)
            }
            if(dobas7==3)
            {
                alap2.src="three.png"
                geplista.push(dobas7)
            }
            if(dobas7==4)
            {
                alap2.src="four.png"
                geplista.push(dobas7)
            }
            if(dobas7==5)
            {
                alap2.src="five.png"
                geplista.push(dobas7)
            }
            if(dobas7==6)
            {
                alap2.src="six.png"
                geplista.push(dobas7)
            } 
        }
    } 
}

function gepdobas3()
{
    dobas8=Math.floor(Math.random()*max+1)
    console.log(dobas8)
    alap3.style.visibility="visible"

    if(dobas8==4)
    {
        alap3.src="four.png"
        geplista.push(dobas8)
    }
    if(dobas8==5)
    {
        alap3.src="five.png"
        geplista.push(dobas8)
    }
    if(dobas8==6)
    {
        alap3.src="six.png"
        geplista.push(dobas8)
    }  

    if(dobas8<4)
    {
        dobas8=Math.floor(Math.random()*max+1)
        console.log(dobas8)

        if(dobas8==4)
        {
            alap3.src="four.png"
            geplista.push(dobas8)
        }
        if(dobas8==5)
        {
            alap3.src="five.png"
            geplista.push(dobas8)
        }
        if(dobas8==6)
        {
            alap3.src="six.png"
            geplista.push(dobas8)
        } 

        if(dobas8<4)
        {
            dobas8=Math.floor(Math.random()*max+1)
            console.log(dobas8)

            if(dobas8==1)
            {
                alap3.src="one.png"
                geplista.push(dobas8)
            }
            if(dobas8==2)
            {
                alap3.src="two.png"
                geplista.push(dobas8)
            }
            if(dobas8==3)
            {
                alap3.src="three.png"
                geplista.push(dobas8)
            }
            if(dobas8==4)
            {
                alap3.src="four.png"
                geplista.push(dobas8)
            }
            if(dobas8==5)
            {
                alap3.src="five.png"
                geplista.push(dobas8)
            }
            if(dobas8==6)
            {
                alap3.src="six.png"
                geplista.push(dobas8)
            } 
        }
    } 
}

function gepdobas4()
{
    dobas9=Math.floor(Math.random()*max+1)
    console.log(dobas9)
    alap4.style.visibility="visible"

    if(dobas9==4)
    {
        alap4.src="four.png"
        geplista.push(dobas9)
    }
    if(dobas9==5)
    {
        alap4.src="five.png"
        geplista.push(dobas9)
    }
    if(dobas9==6)
    {
        alap4.src="six.png"
        geplista.push(dobas9)
    }  

    if(dobas9<4)
    {
        dobas9=Math.floor(Math.random()*max+1)
        console.log(dobas9)

        if(dobas9==4)
        {
            alap4.src="four.png"
            geplista.push(dobas9)
        }
        if(dobas9==5)
        {
            alap4.src="five.png"
            geplista.push(dobas9)
        }
        if(dobas9==6)
        {
            alap4.src="six.png"
            geplista.push(dobas9)
        } 

        if(dobas9<4)
        {
            dobas9=Math.floor(Math.random()*max+1)
            console.log(dobas9)

            if(dobas9==1)
            {
                alap4.src="one.png"
                geplista.push(dobas9)
            }
            if(dobas9==2)
            {
                alap4.src="two.png"
                geplista.push(dobas9)
            }
            if(dobas9==3)
            {
                alap4.src="three.png"
                geplista.push(dobas9)
            }
            if(dobas9==4)
            {
                alap4.src="four.png"
                geplista.push(dobas9)
            }
            if(dobas9==5)
            {
                alap4.src="five.png"
                geplista.push(dobas9)
            }
            if(dobas9==6)
            {
                alap4.src="six.png"
                geplista.push(dobas9)
            } 
        }
    }
}

function gepdobas5()
{
    dobas10=Math.floor(Math.random()*max+1)
    console.log(dobas10)
    alap5.style.visibility="visible"

    if(dobas10==4)
    {
        alap5.src="four.png"
        geplista.push(dobas10)
    }
    if(dobas10==5)
    {
        alap5.src="five.png"
        geplista.push(dobas10)
    }
    if(dobas10==6)
    {
        alap5.src="six.png"
        geplista.push(dobas10)
    }  

    if(dobas10<4)
    {
        dobas10=Math.floor(Math.random()*max+1)
        console.log(dobas10)

        if(dobas10==4)
        {
            alap5.src="four.png"
            geplista.push(dobas10)
        }
        if(dobas10==5)
        {
            alap5.src="five.png"
            geplista.push(dobas10)
        }
        if(dobas10==6)
        {
            alap5.src="six.png"
            geplista.push(dobas10)
        } 

        if(dobas10<4)
        {
            dobas10=Math.floor(Math.random()*max+1)
            console.log(dobas10)

            if(dobas10==1)
            {
                alap5.src="one.png"
                geplista.push(dobas10)
            }
            if(dobas10==2)
            {
                alap5.src="two.png"
                geplista.push(dobas10)
            }
            if(dobas10==3)
            {
                alap5.src="three.png"
                geplista.push(dobas10)
            }
            if(dobas10==4)
            {
                alap5.src="four.png"
                geplista.push(dobas10)
            }
            if(dobas10==5)
            {
                alap5.src="five.png"
                geplista.push(dobas10)
            }
            if(dobas10==6)
            {
                alap5.src="six.png"
                geplista.push(dobas10)
            } 
        }
    }  
}

function SUM1()
{
    for (var i = 0; i < jatekoslista.length; i++) 
    {
        szum1 += jatekoslista[i];
    }
    console.log(szum1)
}

function SUM2()
{ 
    let i = -1
    while (++i < geplista.length) 
    {
        szum2 += geplista[i]
    }
    console.log(szum2)
}

function eredmeny()
{
    if(szum1 > szum2)
    {
        alert("ÖN NYERT!")
    }
    else
    {
        alert("A GÉP NYERT!")
    }
}

function lista1()
{
    listahelye1.innerHTML=szum1
}

function lista2()
{
    listahelye2.innerHTML=szum2
}
