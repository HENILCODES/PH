//Table code
function tables(){
	var a = document.fom.mt.value;
	if(a==null || a=="")
	{
		alert("Enter Minimum 1 Number ");
		return false;
	}
	else
	{
		for(var i=1;i<=10;i++)
		{
			document.getElementById('Mtans').innerHTML+=( a+" x "+ i+" = <b><u>"+(a*i)+"<br>");	
		}	
	}
}
//end

// String is Equal or not
function strings(){
	var s1=document.fom.str1.value;
	var s2=document.fom.str2.value;
	if(s1==null || s1==""){
		alert(" Error : Enter First String please.");
		return false;
	}
	else if(s2==null || s2==""){
		alert(" Error: Enter Second String please.");
		return false;
	}
	else if(s1==s2)
	{
		alert(" Congratulations Enter String is equal. ");
	}
	else{
		alert("Sorry String is Not Equal.");
	}
}

// Calculate two Number
function sum(){
	num1= parseInt(document.fom.n1.value);
	num2= parseInt(document.fom.n2.value);	
	document.getElementById('ans').innerHTML=(num1+num2);	
}
function minas(){
	num1= document.fom.n1.value;
	num2= document.fom.n2.value;	
	document.getElementById('ans').innerHTML=(num1-num2);
}
function divis(){
	num1= document.fom.n1.value;
	num2= document.fom.n2.value;	
	document.getElementById('ans').innerHTML=(num1/num2);
}
function multy(){
	num1= document.fom.n1.value;
	num2= document.fom.n2.value;	
	document.getElementById('ans').innerHTML=(num1*num2);
}
//claculate end