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
	