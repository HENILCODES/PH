var no1,tx,v1,v2,ch,an;
function f1(value)
{
	no1=value;
	tx=document.getElementById('ans').value;
	document.getElementById('ans').value=tx+no1;
}

function f2(value)
{
	if(value=='p')
	{
		v1=document.getElementById('ans').value;
		document.getElementById('ans').value="";
		ch=value;
	}
	else if(value=='s')
	{
		v1=document.getElementById('ans').value;
		document.getElementById('ans').value="";
		ch=value;
	}
	else if(value=='m')
	{
		v1=document.getElementById('ans').value;
		document.getElementById('ans').value="";
		ch=value;
	}
	else if(value=='d')
	{
		v1=document.getElementById('ans').value;
		document.getElementById('ans').value="";
		ch=value;
	}
	else
	{
		v2=document.getElementById('ans').value;
		document.getElementById('ans').value="";
		switch(ch)
		{
			case 'p':
				an=parseInt(v1)+parseInt(v2);
				document.getElementById('ans').value=an;
				break;
			case 's':
				an=parseInt(v1)-parseInt(v2);
				document.getElementById('ans').value=an;
				break;
			case 'm':
				an=parseInt(v1)*parseInt(v2);
				document.getElementById('ans').value=an;
				break;

			case 'd':
				an=parseInt(v1)/parseInt(v2);
				document.getElementById('ans').value=an;
				break;

			default: alert('enter number or select any opretor');
		}
	}	
}