function solveProb()
{
	var eqtn=eqId.value;
	var x=0;
	var y=0;
	var h=0;
	var tLn=0;
	var mtd=document.getElementById("mtdId").value;	
	if(mtd=="elrMtd" ||mtd=="rungeMtd4th"||mtd=="rungeMtd2nd")
	{
		x=parseFloat(xVal.value);
		y=parseFloat(yVal.value);
		h=parseFloat(htId.value);		
		tLn=parseFloat(tlId.value);
		//alert(tLn);
	}
	else if(mtd=="simpson1/3")
	{
		x=parseFloat(xVal.value);
		tLn=parseFloat(yVal.value);
		h=parseFloat(htId.value);
	} 
	var xvals=new Array();
	xvals[0]=x;
	var yvals=new Array();
	yvals[0]=y;
	var k1=new Array();
	var k2=new Array();
	var k3=new Array();
	var k4=new Array();
	for(i=0;x<=tLn;i++)
	{
		if(mtd=="elrMtd")
		{
			fc=expEval(xvals[i],yvals[i],eqtn);
			xvals[i+1]=xvals[i]+h;
			yvals[i+1]=(yvals[i]+h*fc);
			x=xvals[i+1];
		}
		else if(mtd=="rungeMtd4th")
		{
			var tLn=parseFloat(tlId.value);
			fc=rungeExpEval(xvals[i],yvals[i],eqtn,h);
			var vals=fc.split(" ");
			xvals[i+1]=parseFloat(vals[0]);
			yvals[i+1]=parseFloat(vals[1]);
			x=xvals[i+1];
			k1[i]=parseFloat(vals[2]);
			k2[i]=parseFloat(vals[3]);
			k3[i]=parseFloat(vals[4]);
			k4[i]=parseFloat(vals[5]);		
				
		}
		else if(mtd=="rungeMtd2nd")
		{
			var tLn=parseFloat(tlId.value);
			fc=runge2ndMtd(xvals[i],yvals[i],eqtn,h);
			var vals=fc.split(" ");
			xvals[i+1]=parseFloat(vals[0]);
			yvals[i+1]=parseFloat(vals[1]);
			x=xvals[i+1];
			k1[i]=parseFloat(vals[2]);
			k2[i]=parseFloat(vals[3]);	
		}
		else if(mtd=="simpson1/3")
		{
			fc=sempson(xvals[i],yvals[i],eqtn,h);
			var vals=fc.split(" ");
			//alert("vals");
			xvals[i+1]=parseFloat(vals[0]);
			yvals[i+1]=parseFloat(vals[1]);
			x=xvals[i+1];
		}
	}
	//alert("ok");
	if(mtd=="elrMtd")
	{
		createElrTbl(xvals,yvals);
	}
	else if(mtd=="rungeMtd4th")
	{
		createRunge4Tbl(xvals,yvals,k1,k2,k3,k4);
	}
	else if(mtd=="rungeMtd2nd")
	{
		createRunge2Tbl(xvals,yvals,k1,k2);
	}
	else if(mtd=="simpson1/3")
	{
		createElrTbl(xvals,yvals);
	}		
	var selCod=document.getElementById("selId").value;
	drawCurve(xvals,yvals,selCod);
}
function rungeExpEval(tn,yn,exp,ht)
{
	var k1=expEval(tn,yn,exp);
	var cmnTrm=math.evaluate("x+h/2",{x:tn,h:ht});
	var cmnTrm2=math.evaluate("y+h*k1/2",{y:yn,h:ht,k1:k1});
	var k2=expEval(cmnTrm,cmnTrm2,exp);
	var cmnTrm3=math.evaluate("y+h*k2/2",{y:yn,k2:k2,h:ht});
	var k3=expEval(cmnTrm,cmnTrm3,exp);
	var tnPLh=math.evaluate("x+h",{x:tn,h:ht});
	var expFk4=math.evaluate("y+h*k3",{y:yn,h:ht,k3:k3});
	var k4=expEval(tnPLh,expFk4,exp);
	var yv=math.evaluate("y+(1/6*h*(k1+2*k2+2*k3+k4))",{y:yn,h:ht,k1:k1,k2:k2,k3:k3,k4:k4});
	var xv=tnPLh;
	var xyVal=xv+" "+yv+" "+k1+" "+k2+" "+k3+" "+k4;
	return xyVal;
}
function runge2ndMtd(tn,yn,exp,ht)
{
	var k1=expEval(tn,yn,exp);
	var xn=math.evaluate("x+h/2",{x:tn,h:ht});
	var yn=math.evaluate("y+(k1*h)/2",{y:yn,k1:k1,h:ht});
	var k2=expEval(xn,yn,exp)*ht;
	//var k2MulH=math.evaluate("k1*h",{h:ht,k1:k1});
	//var deltay=math.evaluate("1/2*(k1+k2)",{k1:k1,k2:k2});
	var nYn=math.evaluate("yn+k2+h^3",{yn:yn,k2:k2,h:ht});
	var vls=xn+" "+yn+" "+k1+" "+k2;
	return vls;
}
function sempson(xn,yn,exp,ht)
{
	//alert("I am in create table");
	var xV=math.evaluate("x+h",{x:xn,h:ht});
	var yV=math.evaluate(exp,{x:xV});
	var vls=xV+" "+yV;
	return vls;
}
function expEval(xx,yy,exp)
{
	const parser=math.parser();
	var res;
	try{
		res=math.evaluate(exp,{x:xx,y:yy});
		return res;
	}
	catch(err){
		h1Id.innerHTML+=err.toString();
	}
}

function drawCurve(xAry,yAry,selCod)
{
	var can=document.getElementById("canId");
	var ctx=can.getContext("2d");
	ctx.clearRect(0,0,500,500);
	ctx.beginPath();
	if(selCod=="1 co")
	{
		ctx.moveTo(0,0);
		ctx.lineTo(0,500);
		ctx.moveTo(0,500);
		ctx.lineTo(500,500);		
		ctx.moveTo((xAry[0]*50),(500-(yAry[0]*50)));
		for(var i=1;i<xAry.length;i++)
		{
			var a=xAry[i]*50;
			var b=500-(yAry[i]*50);
			ctx.lineTo(a,b);
			ctx.moveTo(a,b);		
		}
		ctx.stroke();
	}
	else if(selCod=="2 co")
	{	
		ctx.moveTo(500,500);
		ctx.lineTo(500,0);
		ctx.moveTo(500,500);
		ctx.lineTo(0,500);	
		ctx.stroke();
	}
	else if(selCod=="3 co")
	{
		ctx.moveTo(500,500);
		ctx.lineTo(500,0);
		ctx.moveTo(0,0);
		ctx.lineTo(500,0);	
		ctx.stroke();
	}	
	else if(selCod=="4 co")
	{
		ctx.moveTo(0,0);
		ctx.lineTo(0,500);
		ctx.moveTo(0,0);
		ctx.lineTo(500,0);
		ctx.stroke();
	}
	else
	{
		ctx.moveTo(250,0);
		ctx.lineTo(250,500);
		ctx.moveTo(0,250);
		ctx.lineTo(500,250);
		ctx.moveTo((xAry[0]*20)+250,(250-(yAry[0]*20)));
		for(var i=1;i<xAry.length;i++)
		{
			var a=(xAry[i]*20)+250;
			var b=250-(yAry[i]*20);
			ctx.lineTo(a,b);
			ctx.moveTo(a,b);		
		}
		ctx.stroke();
	}		
}

function createElem(tag,type,id)
{

	var tg=document.createElement(tag);
	if(tag!="INPUT")
		tg.innerHTML=type;
	else
		tg.type=type;
	tg.id=id;
	return tg;
}
function createBreak(elm,prnt)
{
	var tg=document.createElement(elm);
	var prt=document.getElementById(prnt);
	prt.appendChild(tg);
}

function createQs()
{
	var dltDiv=document.getElementById("qsDiv");
	dltDiv.innerHTML="";
	var mtd=document.getElementById("mtdId").value;	
	var fnLbl=createElem("L","Function","fnL");
	qsDiv.appendChild(fnLbl);
	var fnTxtBx=createElem("INPUT","text","eqId");
	qsDiv.appendChild(fnTxtBx);
	createBreak("BR","qsDiv");
	if(mtd=="elrMtd" ||mtd=="rungeMtd4th"||mtd=="rungeMtd2nd")
	{
		var xLbl=createElem("L","X0:","xL");
		qsDiv.appendChild(xLbl);
		var xVTxtBx=createElem("INPUT","text","xVal");
		qsDiv.appendChild(xVTxtBx);
		createBreak("BR","qsDiv");
		var yLbl=createElem("L","Y0:","yL");
		qsDiv.appendChild(yLbl);
		var yVTxtBx=createElem("INPUT","text","yVal");
		qsDiv.appendChild(yVTxtBx);
		createBreak("BR","qsDiv");
		var htLbl=createElem("L","Height","htL");
		qsDiv.appendChild(htLbl);
		var htTxtBx=createElem("INPUT","text","htId");
		qsDiv.appendChild(htTxtBx);
		createBreak("BR","qsDiv");
		var tlLbl=createElem("L","Total Length","tlL");
		qsDiv.appendChild(tlLbl);
		var tlTxtBx=createElem("INPUT","text","tlId");
		qsDiv.appendChild(tlTxtBx);	
		createBreak("BR","qsDiv");					
	}
	else if(mtd=="simpson1/3")
	{
		var sxLbl=createElem("L","Starting x value:","sxL");
		qsDiv.appendChild(sxLbl);
		var sxVTxtBx=createElem("INPUT","text","xVal");
		qsDiv.appendChild(sxVTxtBx);
		createBreak("BR","qsDiv");
		var exLbl=createElem("L","Ending x value:","exL");
		qsDiv.appendChild(exLbl);
		var exVTxtBx=createElem("INPUT","text","yVal");
		qsDiv.appendChild(exVTxtBx);
		createBreak("BR","qsDiv");
		var htLbl=createElem("L","Step Size:","sSzL");
		qsDiv.appendChild(htLbl);
		var htTxtBx=createElem("INPUT","text","htId");
		qsDiv.appendChild(htTxtBx);	
		createBreak("BR","qsDiv");
	}
	var codrants=document.createElement("SELECT");
	codrants.id="selId";
	qsDiv.appendChild(codrants);	
	var opt1=document.createElement("OPTION");
	opt1.value="1 co";
	opt1.innerHTML="1";
	codrants.appendChild(opt1);
	var opt2=document.createElement("OPTION");
	opt2.value="2 co";
	opt2.innerHTML="2";
	codrants.appendChild(opt2);
	var opt3=document.createElement("OPTION");
	opt3.value="3 co";
	opt3.innerHTML="3";
	codrants.appendChild(opt3);
	var opt4=document.createElement("OPTION");
	opt4.value="4 co";
	opt4.innerHTML="4";
	codrants.appendChild(opt4);
	var opt5=document.createElement("OPTION");
	opt5.value="all co";
	opt5.innerHTML="all";
	codrants.appendChild(opt5);				
	var btn=document.createElement("INPUT");
	btn.type="button";
	btn.id="btnId";
	btn.value="Solve"
	btn.onclick=function()
	{
		solveProb()
	}
	qsDiv.appendChild(btn);
}
