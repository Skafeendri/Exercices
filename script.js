let a=parseInt(prompt("Entrez la valeur de a :",0));
let b=parseInt(prompt("Entrez la valeur de b :", 0));
let c=parseInt(prompt("Entrez la valeur de c :", 0));
function f(){
    if (a>b & b>c)
        alert(a+","+b+","+c);
        else if (a>c & c>b)
            alert(a+","+c+","+b);
            else if (b>a & a>c)
                alert(b+","+a+","+c);
                else if (b>c &c>a)
                    alert(b+","+c+","+a);
                    else if (c>a & a>b)
                        alert(c+","+a+","+b);
                            else if (c>a & b>a)
                                 alert(c+","+b+","+a);
}
f()