var usernameInput = document.querySelector("#inputUsername");
var mailInput = document.querySelector("#inputEmail");
var passInput = document.querySelector("#inputPass");
var confPassInput = document.querySelector("#inputConfirmPass");

var nameInput = document.querySelector("#inputName");
var bDayInput = document.querySelector("#inputBDay");
var phoneInput = document.querySelector("#inputPhone");
var sexInput = document.querySelectorAll('input[name="SexOptions"]')
var addressInput = document.querySelector("#inputAddress");
var drinksInput = document.querySelectorAll('input[name="drinks"]')
var animalInput = document.querySelector("#selectAnimal"); 


var collapsableElemnts = $("small.collapse");

const ShowCollapse = (elem) =>{
	return ()=>{
		elem.collapse('show');
	}
}

const HideCollapse = (elem) =>{
	return ()=>{
		elem.collapse('hide');
	}
}

const AsignCollabseEvents = ()=>{
	collapsableElemnts.toArray().forEach((elem) =>{
		elem.previousElementSibling.addEventListener("focus", ShowCollapse($("#" + elem.id)));
		elem.previousElementSibling.addEventListener("blur", HideCollapse($("#" + elem.id)));
	});
}

const ValidateRequired = (elem) => {
	return () =>{
		if(elem.value === ""){
			SetInvalidClass(elem);
		}
	}
} 

const AsignBlurRequieredElements = () =>{
	var elemsRequiered = [usernameInput, mailInput, passInput, confPassInput]; 
	elemsRequiered.forEach( (elem) =>{
		elem.addEventListener("blur", ValidateRequired(elem));
	})
}

const SetInvalidClass = (elem) =>{
	elem.classList.remove("is-valid");
	elem.classList.add("is-invalid");
}

const SetValidClass = (elem) =>{
	elem.classList.remove("is-invalid");
	elem.classList.add("is-valid");
}

const RemoveValidationClass = (elem) =>{
	elem.classList.remove("is-invalid");
	elem.classList.remove("is-valid");
}

const ValidateUsername = () => {
	var valid = undefined;
	var input = usernameInput.value;

	valid = input.length >= 4 && !(RegExp(/[^A-Za-z0-9]/).test(input));

	valid ? SetValidClass(usernameInput) : SetInvalidClass(usernameInput);

	return valid;
}

const ValidateEmail = ()=> {
	var valid = undefined;
	var input = mailInput.value;

	valid = input!=="" && mailInput.validity.valid;

	valid ? SetValidClass(mailInput) : SetInvalidClass(mailInput);

	return valid;
}

const ValidatePass = () =>{
	var valid = undefined;
	var input = passInput.value;

	var SetInvalidHelpText = (elem) =>{
		elem.classList.remove("text-success");
		elem.classList.add("text-danger");
	}

	var SetValidHelpText = (elem) =>{
		elem.classList.remove("text-danger");
		elem.classList.add("text-success");		
	}

	if(input.length < 8) {
		valid = false;
		SetInvalidHelpText(document.querySelector("#passLength"));
	}else{
		SetValidHelpText(document.querySelector("#passLength"));
	}

	if(RegExp(/[A-Z]/).test(input)){
		SetValidHelpText(document.querySelector("#passCapital"));
	}else{
		valid = false;
		SetInvalidHelpText(document.querySelector("#passCapital"));
	}

	if(RegExp(/[0-9]/).test(input)){
		SetValidHelpText(document.querySelector("#passNum"));
	}else{
		valid = false;
		SetInvalidHelpText(document.querySelector("#passNum"));
	}

	if(RegExp(/[^A-Za-z0-9]/).test(input)){
		valid = false;
		SetInvalidHelpText(document.querySelector("#passChars"));
	}else{
		SetValidHelpText(document.querySelector("#passChars"));
	}

	valid = valid===undefined;

	valid ? SetValidClass(passInput) : SetInvalidClass(passInput);

	return valid;
}

const ValidateConfPass = () =>{
	var valid = undefined;
	var input = confPassInput.value;
	var origPassInput = passInput.value;

	valid = input!=="" && input === origPassInput;

	if(valid){
		document.querySelector("#invalidConfPass").innerText = "";
		SetValidClass(confPassInput);
	}else{
		document.querySelector("#invalidConfPass").innerText = "The password doesn't match.";
		SetInvalidClass(confPassInput);
	}

	return valid;
}

const ValidateName = () =>{
	var valid = undefined;
	var input = nameInput.value;

	valid = input ==="" || (input !=="" && !(RegExp(/[^A-Za-z]/).test(input)));

	valid ? RemoveValidationClass(nameInput) : SetInvalidClass(nameInput);

	return valid;
}

const ValidateDate = () =>{
	var valid = undefined;
	var input = bDayInput.value;
	var currentYear = new Date().getFullYear();
	var inputYear = input.split("-")[0];

	valid = input ==="" || (input !=="" && currentYear - inputYear > 6);

	valid ? RemoveValidationClass(bDayInput) : SetInvalidClass(bDayInput);

	return valid;
}

const ValidatePhone = () =>{
	var valid = undefined;
	var input = phoneInput.value;

	valid = input ==="" || (//If empty is valid
		input !=="" &&  //Not empty, needs to check values
		(input.length === 7 || input.length === 10) && //Local phones and celphone numbers are valid
		!(RegExp(/[^0-9]/).test(input))//false if it finds a character that is not a number = invalid
	);

	valid ? RemoveValidationClass(phoneInput) : SetInvalidClass(phoneInput);

	return valid;
}


const AsignValidationEvents = () => {
	usernameInput.addEventListener("change",ValidateUsername);
	mailInput.addEventListener("change",ValidateEmail);
	passInput.addEventListener("input", ValidatePass);
	confPassInput.addEventListener("input",ValidateConfPass);
	nameInput.addEventListener("change",ValidateName);
	bDayInput.addEventListener("change", ValidateDate);
	phoneInput.addEventListener("change", ValidatePhone);
} 

const GetSexRadioValue = () =>{
	var value = "";

	sexInput.forEach((radio) =>{
		value = radio.checked ? radio.nextElementSibling.textContent : value;
	})

	return value;
}

const GetCheckBoxValues = () =>{
	values = [];

	drinksInput.forEach((box)=>{
		box.checked ? values.push(box.value) : values;
	})

	return values;
}

const isFormValid = () => {
	valid = undefined;
	var validationFunctions = [
		ValidateUsername, ValidateEmail, ValidatePass, ValidateConfPass,
		ValidateName, ValidateDate, ValidatePhone
	]

	for(var funct of validationFunctions){
		if(!funct()){
			valid= false;
			break;
		}
	}
	
	valid = valid === undefined;
	return valid;
}



AsignCollabseEvents();
AsignBlurRequieredElements();
AsignValidationEvents();
