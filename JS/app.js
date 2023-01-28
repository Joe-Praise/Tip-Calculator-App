let billInput = document.getElementById("bill");
let tipBtn = document.querySelectorAll(".tipBtn");
const custom_tip = document.getElementById("custom_tip");
const no_of_people = document.getElementById("nop");
const tipAmount = document.getElementById("tipAmount");
const total = document.getElementById("total");
const resetBtn = document.getElementById("resetBtn");
const error_msg = document.querySelector(".error_msg");
const custom_label = document.querySelector(".custom_label");

let bill, tipPercentage, peopleCount, totalTip, totalBill, diff, target;
let target_num;


tipBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
		target = e.target.textContent;
		tipPercentage = parseFloat(target.substring(0, target.length - 1));
        handleMath();
	})
})

custom_tip.addEventListener("focus", function () {
    custom_label.style.opacity = "0";
});

custom_tip.addEventListener("keyup",function(){
    target = parseInt(custom_tip.value)
    tipPercentage = target;
    handleMath()
})

const handleInputs = () => {
    bill = parseFloat(billInput.value);
    peopleCount = parseInt(no_of_people.value);
}

const handleMath = () =>{
    handleInputs()
    if (bill && peopleCount && tipPercentage) {
        let percent;
        diff = bill / peopleCount;
        percent = (bill * tipPercentage) / 100;
        totalTip = percent / peopleCount;
        totalBill = (bill / peopleCount) + totalTip;

        tipAmount.textContent = "$"+ totalTip.toFixed(2);
        total.textContent = "$" + totalBill.toFixed(2);

        resetBtn.classList.remove("disable_btn");
    }
    else {
        // do nothing
    }
}
custom_tip.addEventListener("keyup", handleMath);

no_of_people.addEventListener("keyup", function () {
    if (no_of_people.value === "0") {
        tipAmount.textContent = "$00.0";
		total.textContent = "$00.0";
        error_msg.innerText = "Can't be zero";
        no_of_people.style.border = "1px solid red";
    } else {
        handleMath();
        error_msg.innerText = "";
		no_of_people.style.border = "2px solid transparent";
    }
})

function init() {
    billInput.value = "";
    custom_tip.value = "";
    no_of_people.value = "";
	tipAmount.textContent = "$00.0";
    total.textContent = "$00.0";
}

resetBtn.addEventListener("click", function () {
    init();
    resetBtn.classList.add("disable_btn");
})
