var dobas
const max=6
var gombszam=0

var dobasharom=document.getElementById("dobas")
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

function dobas3()
{
    dobasszamlalo++

    if(dobasszamlalo>=3)
    {
        dobasharom.disabled=true
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
    dobas=Math.floor(Math.random()*max+1)
    console.log(dobas)
    jatekoslista.push(dobas)

    if(dobas==1)
    {
        alap1.src="egy.png"
    }
    if(dobas==2)
    {
        alap1.src="ketto.png"
    }
    if(dobas==3)
    {
        alap1.src="harom.png"
    }
    if(dobas==4)
    {
        alap1.src="negy.png"
    }
    if(dobas==5)
    {
        alap1.src="ot.png"
    }
    if(dobas==6)
    {
        alap1.src="hat.png"
    }
}

function kockadobas2()
{
    dobas=Math.floor(Math.random()*max+1)
    console.log(dobas)
    jatekoslista.push(dobas)

    if(dobas==1)
    {
        alap2.src="egy.png"
    }
    if(dobas==2)
    {
        alap2.src="ketto.png"
    }
    if(dobas==3)
    {
        alap2.src="harom.png"
    }
    if(dobas==4)
    {
        alap2.src="negy.png"
    }
    if(dobas==5)
    {
        alap2.src="ot.png"
    }
    if(dobas==6)
    {
        alap2.src="hat.png"
    }
}

function kockadobas3()
{
    dobas=Math.floor(Math.random()*max+1)
    console.log(dobas)
    jatekoslista.push(dobas)

    if(dobas==1)
    {
        alap3.src="egy.png"
    }
    if(dobas==2)
    {
        alap3.src="ketto.png"
    }
    if(dobas==3)
    {
        alap3.src="harom.png"
    }
    if(dobas==4)
    {
        alap3.src="negy.png"
    }
    if(dobas==5)
    {
        alap3.src="ot.png"
    }
    if(dobas==6)
    {
        alap3.src="hat.png"
    }
}

function kockadobas4()
{
    dobas=Math.floor(Math.random()*max+1)
    console.log(dobas)
    jatekoslista.push(dobas)

    if(dobas==1)
    {
        alap4.src="egy.png"
    }
    if(dobas==2)
    {
        alap4.src="ketto.png"
    }
    if(dobas==3)
    {
        alap4.src="harom.png"
    }
    if(dobas==4)
    {
        alap4.src="negy.png"
    }
    if(dobas==5)
    {
        alap4.src="ot.png"
    }
    if(dobas==6)
    {
        alap4.src="hat.png"
    }
}

function kockadobas5()
{
    dobas=Math.floor(Math.random()*max+1)
    console.log(dobas)
    jatekoslista.push(dobas)

    if(dobas==1)
    {
        alap5.src="egy.png"
    }
    if(dobas==2)
    {
        alap5.src="ketto.png"
    }
    if(dobas==3)
    {
        alap5.src="harom.png"
    }
    if(dobas==4)
    {
        alap5.src="negy.png"
    }
    if(dobas==5)
    {
        alap5.src="ot.png"
    }
    if(dobas==6)
    {
        alap5.src="hat.png"
    }  
}

function kovetkezo()
{
    if(kocka1==false)
    {
        alap1.style.visibility="hidden"
        //alap1.parentNode.remvoeChild(alap1)
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

function lista1()
{
    listahelye1.innerHTML=jatekoslista
}



// GÉP KÖRE RÉSZ

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
    }
}

function gepdobas1()
{
    dobas=Math.floor(Math.random()*max+1)
    console.log(dobas)
    geplista.push(dobas)
    alap1.style.visibility="visible"

    if(dobas==4)
    {
        alap1.src="four.png"
    }
    if(dobas==5)
    {
        alap1.src="five.png"
    }
    if(dobas==6)
    {
        alap1.src="six.png"
    }  

    if(dobas<4)
    {
        dobas=Math.floor(Math.random()*max+1)
        console.log(dobas)
        geplista.push(dobas)

        if(dobas==4)
        {
            alap1.src="four.png"
        }
        if(dobas==5)
        {
            alap1.src="five.png"
        }
        if(dobas==6)
        {
            alap1.src="six.png"
        } 

        if(dobas<4)
        {
            dobas=Math.floor(Math.random()*max+1)
            console.log(dobas)
            geplista.push(dobas)

            if(dobas==1)
            {
                alap1.src="one.png"
            }
            if(dobas==2)
            {
                alap1.src="two.png"
            }
            if(dobas==3)
            {
                alap1.src="three.png"
            }
            if(dobas==4)
            {
                alap1.src="four.png"
            }
            if(dobas==5)
            {
                alap1.src="five.png"
            }
            if(dobas==6)
            {
                alap1.src="six.png"
            } 
        }
    }
}

function gepdobas2()
{
    dobas=Math.floor(Math.random()*max+1)
    console.log(dobas)
    geplista.push(dobas)
    alap2.style.visibility="visible"

    if(dobas==4)
    {
        alap2.src="four.png"
    }
    if(dobas==5)
    {
        alap2.src="five.png"
    }
    if(dobas==6)
    {
        alap2.src="six.png"
    }  

    if(dobas<4)
    {
        dobas=Math.floor(Math.random()*max+1)
        console.log(dobas)
        geplista.push(dobas)

        if(dobas==4)
        {
            alap2.src="four.png"
        }
        if(dobas==5)
        {
            alap2.src="five.png"
        }
        if(dobas==6)
        {
            alap2.src="six.png"
        } 

        if(dobas<4)
        {
            dobas=Math.floor(Math.random()*max+1)
            console.log(dobas)
            geplista.push(dobas)

            if(dobas==1)
            {
                alap2.src="one.png"
            }
            if(dobas==2)
            {
                alap2.src="two.png"
            }
            if(dobas==3)
            {
                alap2.src="three.png"
            }
            if(dobas==4)
            {
                alap2.src="four.png"
            }
            if(dobas==5)
            {
                alap2.src="five.png"
            }
            if(dobas==6)
            {
                alap2.src="six.png"
            } 
        }
    } 
}

function gepdobas3()
{
    dobas=Math.floor(Math.random()*max+1)
    console.log(dobas)
    geplista.push(dobas)
    alap3.style.visibility="visible"

    if(dobas==4)
    {
        alap3.src="four.png"
    }
    if(dobas==5)
    {
        alap3.src="five.png"
    }
    if(dobas==6)
    {
        alap3.src="six.png"
    }  

    if(dobas<4)
    {
        dobas=Math.floor(Math.random()*max+1)
        console.log(dobas)
        geplista.push(dobas)

        if(dobas==4)
        {
            alap3.src="four.png"
        }
        if(dobas==5)
        {
            alap3.src="five.png"
        }
        if(dobas==6)
        {
            alap3.src="six.png"
        } 

        if(dobas<4)
        {
            dobas=Math.floor(Math.random()*max+1)
            console.log(dobas)
            geplista.push(dobas)

            if(dobas==1)
            {
                alap3.src="one.png"
            }
            if(dobas==2)
            {
                alap3.src="two.png"
            }
            if(dobas==3)
            {
                alap3.src="three.png"
            }
            if(dobas==4)
            {
                alap3.src="four.png"
            }
            if(dobas==5)
            {
                alap3.src="five.png"
            }
            if(dobas==6)
            {
                alap3.src="six.png"
            } 
        }
    } 
}

function gepdobas4()
{
    dobas=Math.floor(Math.random()*max+1)
    console.log(dobas)
    geplista.push(dobas)
    alap4.style.visibility="visible"

    if(dobas==4)
    {
        alap4.src="four.png"
    }
    if(dobas==5)
    {
        alap4.src="five.png"
    }
    if(dobas==6)
    {
        alap4.src="six.png"
    }  

    if(dobas<4)
    {
        dobas=Math.floor(Math.random()*max+1)
        console.log(dobas)
        geplista.push(dobas)

        if(dobas==4)
        {
            alap4.src="four.png"
        }
        if(dobas==5)
        {
            alap4.src="five.png"
        }
        if(dobas==6)
        {
            alap4.src="six.png"
        } 

        if(dobas<4)
        {
            dobas=Math.floor(Math.random()*max+1)
            console.log(dobas)
            geplista.push(dobas)

            if(dobas==1)
            {
                alap4.src="one.png"
            }
            if(dobas==2)
            {
                alap4.src="two.png"
            }
            if(dobas==3)
            {
                alap4.src="three.png"
            }
            if(dobas==4)
            {
                alap4.src="four.png"
            }
            if(dobas==5)
            {
                alap4.src="five.png"
            }
            if(dobas==6)
            {
                alap4.src="six.png"
            } 
        }
    }
}

function gepdobas5()
{
    dobas=Math.floor(Math.random()*max+1)
    console.log(dobas)
    geplista.push(dobas)
    alap5.style.visibility="visible"

    if(dobas==4)
    {
        alap5.src="four.png"
    }
    if(dobas==5)
    {
        alap5.src="five.png"
    }
    if(dobas==6)
    {
        alap5.src="six.png"
    }  

    if(dobas<4)
    {
        dobas=Math.floor(Math.random()*max+1)
        console.log(dobas)
        geplista.push(dobas)

        if(dobas==4)
        {
            alap5.src="four.png"
        }
        if(dobas==5)
        {
            alap5.src="five.png"
        }
        if(dobas==6)
        {
            alap5.src="six.png"
        } 

        if(dobas<4)
        {
            dobas=Math.floor(Math.random()*max+1)
            console.log(dobas)
            geplista.push(dobas)

            if(dobas==1)
            {
                alap5.src="one.png"
            }
            if(dobas==2)
            {
                alap5.src="two.png"
            }
            if(dobas==3)
            {
                alap5.src="three.png"
            }
            if(dobas==4)
            {
                alap5.src="four.png"
            }
            if(dobas==5)
            {
                alap5.src="five.png"
            }
            if(dobas==6)
            {
                alap5.src="six.png"
            } 
        }
    }  
}

function lista2()
{
    listahelye2.innerHTML=geplista
}

