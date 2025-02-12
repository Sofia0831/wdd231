function incrementFormCount() {
	let formCount = parseInt(localStorage.getItem('formCount')) || 0;
	formCount++;
	localStorage.setItem('formCount', formCount);
	console.log(`Total forms completed: ${formCount}`);
}


const currentUrl = window.location.href;

const everything = currentUrl.split('?')

let formData = everything[1].split('&')

function show(cup) {
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result=element.split('=')[1].replace("%40", "@").replace(/\+/g, " ")
        }
    })
    return(result)
}

const showInfo = document.querySelector(".message");
showInfo.innerHTML = `
<h3>Message Submitted</h3>
<p>Greetings ${show("name")}, your message has been successfully sent! We'll try to get back to you as soon as possible.</p>
`;