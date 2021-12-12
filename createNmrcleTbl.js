function createElrTbl(xAry,yAry)
{
	//alert("ok");
	var dlTbl=document.getElementById("tbl1");
	if(dlTbl!=null)
		dlTbl.remove();	
	var tbl=document.createElement("TABLE");
	tbl.id="tbl1";
	tbl.border="1";
	document.body.appendChild(tbl);	
	//tbl.remove();
	var tr=document.createElement("TR");
	tr.id="tbl1tr0";
	var td1=document.createElement("TD");
	td1.id=tr.id+"td0";
	td1.innerHTML="x";
	var td2=document.createElement("TD");
	td2.id=tr.id+"td1";
	td2.innerHTML="y";
	tbl1.appendChild(tr);
	tr.appendChild(td1);
	tr.appendChild(td2);
	for(i=0;i<xAry.length;i++)
	{
		var tr=document.createElement("TR");
		tr.id="tbl1tr"+(i+1);
		var td1=document.createElement("TD");
		td1.id=tr.id+"td"+i;
		td1.name="xVal";
		td1.innerHTML=xAry[i];
		var td2=document.createElement("TD");
		td2.id=tr.id+"td"+(i+1);
		td2.name="yVal";
		td2.innerHTML=yAry[i];
		tbl1.appendChild(tr);
		tr.appendChild(td1);
		tr.appendChild(td2);
	}
}
function createRunge4Tbl(xAry,yAry,k1,k2,k3,k4)	
{
	var dlTbl=document.getElementById("tbl1");
	if(dlTbl!=null)
		dlTbl.remove();	
	var tbl=document.createElement("TABLE");
	tbl.id="tbl1";
	tbl.border="1";
	document.body.appendChild(tbl);
	var tr=document.createElement("TR");
	tr.id="tbl1tr0";
	var td1=document.createElement("TD");
	td1.id=tr.id+"td0";
	td1.innerHTML="x";
	var td2=document.createElement("TD");
	td2.id=tr.id+"td1";
	td2.innerHTML="y";
	var td3=document.createElement("TD");
	td3.id=tr.id+"td2";
	td3.innerHTML="k1";
	var td4=document.createElement("TD");
	td4.id=tr.id+"td3";
	td4.innerHTML="k2";
	var td5=document.createElement("TD");
	td5.id=tr.id+"td4";
	td5.innerHTML="k3";	
	var td6=document.createElement("TD");
	td6.id=tr.id+"td5";
	td6.innerHTML="k4";
		document.body.appendChild(tbl);									
	tbl1.appendChild(tr);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	tr.appendChild(td6);					
	for(i=0;i<xAry.length;i++)
	{
		var tr=document.createElement("TR");
		tr.id="tbl1tr"+(i+1);
		var td1=document.createElement("TD");
		td1.id=tr.id+"td"+i;
		td1.name="xVal";
		td1.innerHTML=xAry[i];
		var td2=document.createElement("TD");
		td2.id=tr.id+"td"+(i+1);
		td2.name="yVal";
		td2.innerHTML=yAry[i];
		var td3=document.createElement("TD");
		td3.id=tr.id+"td"+(i+2);
		td3.name="k1";
		td3.innerHTML=k1[i];
		var td4=document.createElement("TD");
		td4.id=tr.id+"td"+(i+3);
		td4.name="k2";
		td4.innerHTML=k2[i];
		var td5=document.createElement("TD");
		td5.id=tr.id+"td"+(i+4);
		td5.name="k3";
		td5.innerHTML=k3[i];
		var td6=document.createElement("TD");
		td6.id=tr.id+"td"+(i+5);
		td6.name="k4";
		td6.innerHTML=k4[i];						
		tbl1.appendChild(tr);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		tr.appendChild(td6);
	}	
}
function createRunge2Tbl(xAry,yAry,k1,k2)
{
	var dlTbl=document.getElementById("tbl1");
	if(dlTbl!=null)
		dlTbl.remove();	
	var tbl=document.createElement("TABLE");
	tbl.id="tbl1";
	tbl.border="1";
	document.body.appendChild(tbl);
	var tr=document.createElement("TR");
	tr.id="tbl1tr0";
	var td1=document.createElement("TD");
	td1.id=tr.id+"td0";
	td1.innerHTML="x";
	var td2=document.createElement("TD");
	td2.id=tr.id+"td1";
	td2.innerHTML="y";
	var td3=document.createElement("TD");
	td3.id=tr.id+"td2";
	td3.innerHTML="k1";
	var td4=document.createElement("TD");
	td4.id=tr.id+"td3";
	td4.innerHTML="k2";	
		document.body.appendChild(tbl);									
	tbl1.appendChild(tr);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);					
	for(i=0;i<xAry.length;i++)
	{
		var tr=document.createElement("TR");
		tr.id="tbl1tr"+(i+1);
		var td1=document.createElement("TD");
		td1.id=tr.id+"td"+i;
		td1.name="xVal";
		td1.innerHTML=xAry[i];
		var td2=document.createElement("TD");
		td2.id=tr.id+"td"+(i+1);
		td2.name="yVal";
		td2.innerHTML=yAry[i];
		var td3=document.createElement("TD");
		td3.id=tr.id+"td"+(i+2);
		td3.name="k1";
		td3.innerHTML=k1[i];
		var td4=document.createElement("TD");
		td4.id=tr.id+"td"+(i+3);
		td4.name="k2";
		td4.innerHTML=k2[i];						
		tbl1.appendChild(tr);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
	}	
}
