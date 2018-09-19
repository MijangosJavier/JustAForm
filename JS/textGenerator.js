var subBtn = document.querySelector("#subBtn"); 
var editBtn = document.querySelector("#editBtn");
var outputSection = $("#outputContainer");
var formSection = $("#formContainer");

const CreateUserObj = () =>{	
	var userInfo;
	if (isFormValid()){
		userInfo = {
			username : usernameInput.value,
			email : mailInput.value,
			password : passInput.value,
			name : nameInput.value,
			bDay : bDayInput.value,
			phone : phoneInput.value,
			sex : GetSexRadioValue(),
			address : addressInput.value,
			drinks : GetCheckBoxValues(),
			animal : animalInput.value
		};

		return userInfo;
	}

	return null;
}

const ShowOutputText = () =>{
	ShowCollapse(outputSection)();
	HideCollapse(formSection)();
}

const ShowForm = ()=>{
	ShowCollapse(formSection)();
	HideCollapse(outputSection)();
}

const GenNameText = (name) =>{
	var text = name === "" ? " a secret" : name;
	text = text.toLowerCase();
	var firstLetter = text[0].toUpperCase();
	text = firstLetter + text.substr(1);
	return text;
}

const GenSexText = (sex) =>{
	var text = sex === "" ? "a person" : sex === "Other"  ? "neither female nor male" : sex.toLowerCase();
	return text;
}

const GenBDayText = (date) =>{
	var text = date === "" ? "a beautiful day" : new Date(date+'T00:00:00').toDateString();
	return text;
}

const GenPhoneText = (phone) =>{
	var text = phone === "" ? "of your phone" : phone;
	return text;
}

const GenAddressText = (address) =>{
	var text = address === "" ? "your home" : address;
	return text;
}

const GenDrinkText = (drinks) =>{
	var ListDrinks = () =>{
		var list = "like to drink ";
		var drinkLenght = drinks.length;

		for(var i = 0; i < drinkLenght; i++){
			list = i !== drinkLenght-1 ? list + drinks[i] + ", " : list + drinks[i];
		}

		return list;
	}

	var text = drinks.length === 0 ? "are thirsty" : ListDrinks();
	return text;
}

const GenerateText = ()=>{
	var info = CreateUserObj();

	if(info === null){
		return;
	}

	document.querySelector("#sName").innerText = GenNameText(info.name);
	document.querySelector("#sUsername").innerText = info.username;
	document.querySelector("#sSex").innerText = GenSexText (info.sex);
	document.querySelector("#sBDay").innerText = GenBDayText(info.bDay);
	document.querySelector("#sMail").innerText = info.email;
	document.querySelector("#sPhone").innerText = GenPhoneText(info.phone);
	document.querySelector("#sAddress").innerText = GenAddressText(info.address);
	document.querySelector("#sDrink").innerText = GenDrinkText(info.drinks);
	document.querySelector("#sAnimal").innerText = info.animal;

	ShowOutputText();
}

subBtn.addEventListener("click", GenerateText);
editBtn.addEventListener("click", ShowForm);