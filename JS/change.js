var changeBtn = document.querySelector("#changeBtn");
var restBtn = document.querySelector("#resetChangeBtn");

const HideCards = (fancy)=>{
	var uglyCard = document.querySelector("#cardContainerUgly");
	var fnacyCard = document.querySelector("#cardContainerFancy");

	if(fancy){
		uglyCard.setAttribute("hidden","");
		fnacyCard.removeAttribute("hidden","");
	}else{
		fnacyCard.setAttribute("hidden","");
		uglyCard.removeAttribute("hidden","");
	}
	
}

const ChangeBg = (fancy)=>{
	if(fancy){
		document.querySelector("body").classList.add("fancyFont", "bg", "fadeIn", "animated");
	}else{
		document.querySelector("body").classList.remove("fancyFont", "bg", "fadeIn", "animated");
	}
	
}

const ChangeFormSection = (fancy) =>{
	var SetClasses = (elem)=>{
		elem.classList.add("bg-transparent", "text-white");
	}

	var RemoveClasses = (elem)=>{
		elem.classList.remove("bg-transparent", "text-white");
	}

	if(fancy){
		SetClasses(document.querySelector("#instructionText"));
		SetClasses(document.querySelector("#formSection"));
	}else{
		RemoveClasses(document.querySelector("#instructionText"));
		RemoveClasses(document.querySelector("#formSection"));
	}
	
}

const ChangeInputs =(fancy)=>{
	var labelList = Object.values(document.querySelectorAll(".custom-control-label"));
	var optionsList = Object.values(document.querySelectorAll("option"));
	var inputList = [usernameInput, mailInput, passInput, confPassInput,
		nameInput, bDayInput, phoneInput, addressInput, animalInput];
	var elemList = inputList.concat(labelList).concat(optionsList);

	elemList.forEach((elem)=>{
		if(fancy){
			elem.classList.add("fancyInput");
		}else{
			elem.classList.remove("fancyInput");
		}
	});
}

const ChangeHelpText =(fancy)=>{
	var helTextList = Object.values(document.querySelectorAll("small.form-text"));
	
	helTextList.forEach((elem)=>{
		if(fancy){
			elem.classList.remove("text-muted");
		}else{
			elem.classList.add("text-muted");
		}
	});
}

const ChangeButtons =(fancy)=>{
	var SetClass = (elem)=>{
		elem.classList.add("fancyBtn");
	}

	var RemoveClass = (elem)=>{
		elem.classList.remove("fancyBtn");
	}

	if(fancy){
		SetClass(document.querySelector("#subBtn"));
		SetClass(document.querySelector("#editBtn"));
	}else{
		RemoveClass(document.querySelector("#subBtn"));
		RemoveClass(document.querySelector("#editBtn"));
	}

	
}

const ChangeHrs =(fancy)=>{
	var hrList = Object.values(document.querySelectorAll("hr"));
	hrList.forEach((elem) =>{
		if(fancy){
			elem.classList.add("fancyHr");
		}else{
			elem.classList.remove("fancyHr");
		}
		
	})
}

const ChangeOutput =(fancy)=>{
	
	if(fancy){
		document.querySelector("#output").classList.add("fancyOutput");
	}else{
		document.querySelector("#output").classList.remove("fancyOutput");
	}
}

const ChangeStyle = (fancy)=>{
	HideCards(fancy);
	ChangeBg(fancy);
	ChangeFormSection(fancy);
	ChangeInputs(fancy);
	ChangeHelpText(fancy);
	ChangeButtons(fancy);
	ChangeHrs(fancy);
	ChangeOutput(fancy);
}

const ToFancyStyle=()=>{
	ChangeStyle(true);
}

const ToStandardStyle=()=>{
	ChangeStyle(false);
	// location.reload();
}

changeBtn.addEventListener("click", ToFancyStyle);
restBtn.addEventListener("click", ToStandardStyle)