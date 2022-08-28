"use strict";
//----------------------------------------------------------GettingWeapons-----

// ----------------------------------------------------------------------------
addCommandHandler("addmoney", function (cmdName, params) {
	if (!params || params == "") {
		message("Syntax: /addmoney <amount || int>", syntaxMessageColour);
		return false;
	}  
   	//----------New Var converts string param to int
	let extraamount =  parseInt(params);
    //----------Checks if money param is to high if so sets to max
    	if (extraamount > 999999999) {
    		localPlayer.money = 999999999;
    		message("Syntax: /addmoney <to large, setting your money to max instead>", syntaxMessageColour);
    		let outputText = `gave themself maximum amount of money using /addmoney`;
			outputSandboxMessage(outputText);
			return true;
    	}
    //-----------If all correct players money is changed by set amount
	localPlayer.money = localPlayer.money + extraamount;
    let outputText = `gave themself $${extraamount} using /addmoney`;
	outputSandboxMessage(outputText);
	return true;
	
});
addCommandHandler("removemoney", function (cmdName, params) {
	if (!params || params == "") {
		message("Syntax: /removemoney <amount || int>", syntaxMessageColour);
		return false;
	}  
   	//----------New Var converts string param to int
	let extraamount =  parseInt(params);
    //----------Checks if money param is to high if so sets to max
    	if (extraamount > localPlayer.money) {
    		localPlayer.money = 0;
    		message("Syntax: /remove <to large, setting your money to $0 instead>", syntaxMessageColour);
    		let outputText = `removed all their money using /removemoney`;
			outputSandboxMessage(outputText);
			return true;
    	}
    //-----------If all correct players money is changed by set amount
	localPlayer.money = localPlayer.money - extraamount;
    let outputText = `removed  $${extraamount} from themself using /removemoney`;
	outputSandboxMessage(outputText);
	return true;
	
});
addCommandHandler("setmoney", function (cmdName, params) {
	if (!params || params == "") {
		message("Syntax: /setmoney <amount || int>", syntaxMessageColour);
		return false;
	}
   	//----------New Var converts string param to int
	let extraamount =  parseInt(params);
    //----------Checks if money param is to high if so sets to max
    	if (extraamount > 999999999) {
    		localPlayer.money = 999999999;
    		message("Syntax: /remove <to large, setting your money to max instead>", syntaxMessageColour);
    		let outputText = `set thier money to $999999999 using /setmoney`;
			outputSandboxMessage(outputText);
			return true;
    	}
    //-----------If all correct players money is changed by set amount
	localPlayer.money = extraamount;
    let outputText = `set their money to $${extraamount} using /setmoney`;
	outputSandboxMessage(outputText);
	return true;
	
});
//-----------------------------------------------------------------------------
addCommandHandler("help", function (cmdName, params) {


	
	message("Lemons Commands : wantedlevel,addmoney,setmoney,removemoney,giveallweapons,loadinterior")
	return true;
	
});
//-----------------------------------------------------------------------------
addCommandHandler("wantedlevel", function (cmdName, params) {
	if (!params || params == "") {
		message("Syntax: /wantedlevel <star amount> <player target>", syntaxMessageColour);
		return false;
	}  
   	//----------New Var converts string param to int

	let starsamount = parseInt(params);
	localPlayer.wantedLevel = starsamount;
	
	
    let outputText = `Gave themself ${starsamount} Stars`;
	outputSandboxMessage(outputText);
	return true;
	
});
//-----------------------------------------------------------------------------
addCommandHandler("loadinterior", function (cmdName, params) {
	if (!params || params == "") {
		message("Syntax: /loadinterior <building id>", syntaxMessageColour);
		return false;
	}  
   	//----------New Var converts string param to int
	let buildingid = parseInt(params);
    //----------Checks if buildingid is valid if not sends syntax message to player stop script
    	if (buildingid > 18) {
    		message("Syntax: /loadinterior <Invlaid ID>", syntaxMessageColour);
			return false;
    	} 
		else 
		{
           if (buildingid < 0) {
           		message("Syntax: /loadinterior <Invlaid ID>", syntaxMessageColour);
				return false;
			}
		}
		
    //-----------If all correct building interior will load for client
	gta.cameraInterior = buildingid;
    let outputText = `set interiorID: ${buildingid} to 1 for themself`;
	outputSandboxMessage(outputText);
	return true;
	
});
//-----------------------------------------------------------------------------
addCommandHandler("giveallweapons", function (cmdName, params) {
   	localPlayer.giveWeapon(WEAPON_UNARMED, 99999, true);
	localPlayer.giveWeapon(WEAPON_BRASSKNUCKLE, 99999, true);
	localPlayer.giveWeapon(WEAPON_SCREWDRIVER, 99999, true);
	localPlayer.giveWeapon(WEAPON_GOLFCLUB, 99999, true);
	localPlayer.giveWeapon(WEAPON_NIGHTCLUB, 99999, true);
	localPlayer.giveWeapon(WEAPON_KNIFE, 99999, true);
	localPlayer.giveWeapon(WEAPON_BASEBALLBAT, 99999, true);
	localPlayer.giveWeapon(WEAPON_HAMMER, 99999, true);
	localPlayer.giveWeapon(WEAPON_CLEAVER, 99999, true);
	localPlayer.giveWeapon(WEAPON_MACHETE, 99999, true);
	localPlayer.giveWeapon(WEAPON_KATANA, 99999, true);
	localPlayer.giveWeapon(WEAPON_CHAINSAW, 99999, true);
	localPlayer.giveWeapon(WEAPON_GRENADE, 99999, true);
	localPlayer.giveWeapon(WEAPON_TEARGAS, 99999, true);
	localPlayer.giveWeapon(WEAPON_MOLOTOV, 99999, true);
	localPlayer.giveWeapon(WEAPON_COLT45, 99999, true);
	localPlayer.giveWeapon(WEAPON_PYTHON, 99999, true);
	localPlayer.giveWeapon(WEAPON_SHOTGUN, 99999, true);
	localPlayer.giveWeapon(WEAPON_SPAS12SHOTGUN, 99999, true);
	localPlayer.giveWeapon(WEAPON_STUBBYSHOTGUN, 99999, true);
	localPlayer.giveWeapon(WEAPON_TEC9, 99999, true);
	localPlayer.giveWeapon(WEAPON_UZI, 99999, true);
	localPlayer.giveWeapon(WEAPON_SILENCEDINGRAM, 99999, true);
	localPlayer.giveWeapon(WEAPON_MP5, 99999, true);
	localPlayer.giveWeapon(WEAPON_M4, 99999, true);
	localPlayer.giveWeapon(WEAPON_RUGER, 99999, true);
	localPlayer.giveWeapon(WEAPON_SNIPERRIFLE, 99999, true);
	localPlayer.giveWeapon(WEAPON_LASERSCOPE, 99999, true);
	localPlayer.giveWeapon(WEAPON_ROCKETLAUNCHER, 99999, true);
	localPlayer.giveWeapon(WEAPON_FLAMETHROWER, 99999, true);
	localPlayer.giveWeapon(WEAPON_M60, 99999, true);
	localPlayer.giveWeapon(WEAPON_MINIGUN, 99999, true);
    let outputText = `gave themself all weapons using /giveallweapons`;
	outputSandboxMessage(outputText);
	return true;
	
});
//------------------OUTPUTSANDBOXMESSAGEFUNCTION FROM V-SANDBOX MADE BY VORTEX
function outputSandboxMessage(messageText) {
	if(isConnected) {
		console.log(`[Sandbox] ${localClient.name} ${messageText}`);
		triggerNetworkEvent("sb.msg", messageText);
	} else {
		console.log(`[Sandbox] You ${messageText}`);
		message(`You ${messageText}`, gameAnnounceColour);

	}
}
