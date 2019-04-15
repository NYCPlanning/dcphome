 /********************************************************************************
* This script is specially for NYC Department of City Planning's Community Data Portal
* It enables 2-level dynamic drop down list
* This Script is used in DCP whole website, Function frompage(from) enable redirecting action from different path to the same page
* 05/15/09
***********************************************************************************/





// show all the community disctricts when page loaded.

window.onload=function(){
	
	fillCd_all();
}


function fillCd_all(){
	
	objSelect_Cd= document.lucats.Boro;
	removeAllOptions(objSelect_Cd);
	
	addOption(objSelect_Cd, "N", "Borough");
	addOption(objSelect_Cd, "0", "Bronx");
	addOption(objSelect_Cd, "1", "Brooklyn");
	addOption(objSelect_Cd, "2", "Manhattan");
	addOption(objSelect_Cd, "3", "Queens");
	addOption(objSelect_Cd, "4", "Staten Island");
}





// after selecting the cd, the CDs will show accordingly

function AddCds(){
	
	objSelect_Nbh=document.lucats.CD;
	removeAllOptions(objSelect_Nbh);
	addOption(objSelect_Nbh, "N", "Community District");
	
	
if(objSelect_Cd.value == '0')
{
addOption(objSelect_Nbh, "14", "CD 1");
addOption(objSelect_Nbh, "15", "CD 2");
addOption(objSelect_Nbh, "16", "CD 3");
addOption(objSelect_Nbh, "17", "CD 4");
addOption(objSelect_Nbh, "18", "CD 5");
addOption(objSelect_Nbh, "19", "CD 6");
addOption(objSelect_Nbh, "20", "CD 7");
addOption(objSelect_Nbh, "21", "CD 8");
addOption(objSelect_Nbh, "22", "CD 9");
addOption(objSelect_Nbh, "23", "CD 10");
addOption(objSelect_Nbh, "24", "CD 11");
addOption(objSelect_Nbh, "25", "CD 12");
}

if(objSelect_Cd.value == '1')
{
addOption(objSelect_Nbh, "27", "CD 1");
addOption(objSelect_Nbh, "28", "CD 2");
addOption(objSelect_Nbh, "29", "CD 3");
addOption(objSelect_Nbh, "30", "CD 4");
addOption(objSelect_Nbh, "31", "CD 5");
addOption(objSelect_Nbh, "32", "CD 6");
addOption(objSelect_Nbh, "33", "CD 7");
addOption(objSelect_Nbh, "34", "CD 8");
addOption(objSelect_Nbh, "35", "CD 9");
addOption(objSelect_Nbh, "36", "CD 10");
addOption(objSelect_Nbh, "37", "CD 11");
addOption(objSelect_Nbh, "38", "CD 12");
addOption(objSelect_Nbh, "39", "CD 13");
addOption(objSelect_Nbh, "40", "CD 14");
addOption(objSelect_Nbh, "41", "CD 15");
addOption(objSelect_Nbh, "42", "CD 16");
addOption(objSelect_Nbh, "43", "CD 17");
addOption(objSelect_Nbh, "44", "CD 18");
}


if(objSelect_Cd.value == '2')
{
addOption(objSelect_Nbh, "1", "CD 1");
addOption(objSelect_Nbh, "2", "CD 2");
addOption(objSelect_Nbh, "3", "CD 3");
addOption(objSelect_Nbh, "4", "CD 4");
addOption(objSelect_Nbh, "5", "CD 5");
addOption(objSelect_Nbh, "6", "CD 6");
addOption(objSelect_Nbh, "7", "CD 7");
addOption(objSelect_Nbh, "8", "CD 8");
addOption(objSelect_Nbh, "9", "CD 9");
addOption(objSelect_Nbh, "10", "CD 10");
addOption(objSelect_Nbh, "11", "CD 11");
addOption(objSelect_Nbh, "12", "CD 12");
}

if(objSelect_Cd.value == '3')
{
addOption(objSelect_Nbh, "46", "CD 1");
addOption(objSelect_Nbh, "47", "CD 2");
addOption(objSelect_Nbh, "48", "CD 3");
addOption(objSelect_Nbh, "49", "CD 4");
addOption(objSelect_Nbh, "50", "CD 5");
addOption(objSelect_Nbh, "51", "CD 6");
addOption(objSelect_Nbh, "52", "CD 7");
addOption(objSelect_Nbh, "53", "CD 8");
addOption(objSelect_Nbh, "54", "CD 9");
addOption(objSelect_Nbh, "55", "CD 10");
addOption(objSelect_Nbh, "56", "CD 11");
addOption(objSelect_Nbh, "57", "CD 12");
addOption(objSelect_Nbh, "58", "CD 13");
addOption(objSelect_Nbh, "59", "CD 14");
}

if(objSelect_Cd.value == '4')
{
addOption(objSelect_Nbh, "61", "CD 1");
addOption(objSelect_Nbh, "62", "CD 2");
addOption(objSelect_Nbh, "63", "CD 3");

}
}


function removeAllOptions(selectbox)
{
	var i;
	for(i=selectbox.options.length-1;i>=0;i--)
	{
		//selectbox.options.remove(i);
		selectbox.remove(i);
	}
}


function addOption(selectbox, value, text )
{
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;

	selectbox.options.add(optn);
}



//while selecting a neighbourhood, redirect to a new page 
function LucatsResult() {
	
	objSelect_Nbh=document.lucats.CD;
	var cdnum=objSelect_Nbh.value;
	
	if (cdnum == 'N')  {
		window.location.href ="https://nycdcppfs.dynamics365portals.us";
		return false;
		
	} else {
			window.location.href = ("https://dcppfsuat.dynamics365portals.us/applicants/overview/application-status-new/project-address-search/?mf=0%3D" + escape(document.lucats.Boro.value) + "%261%3D" + escape(document.lucats.CD.value));
		return false;
		
				 
}
}