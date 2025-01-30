// HEADER
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#animate');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//THANK YOU
const currentUrl = window.location.href;
// console.log(currentUrl)
const everything = currentUrl.split('?');

if (everything.length > 1) {
    let formData = everything[1].split('&');
    console.log(formData);

    function show(info) {
        let result;

        formData.forEach((element) => {
            if (element.startsWith(info)) {
                let encodedValue = element.split('=')[1];
                let decodedValue = decodeURIComponent(encodedValue);

                if (info === 'timestamp') {
                    try {
                        const dateAndTime = decodedValue.split('T');
                        const date = dateAndTime[0];
                        let time = dateAndTime[1];

                        result = {
                            date: date,
                            time: time
                        };
                    } catch (error) {
                        console.error("Error parsing timestamp:", error);
                        result = { date: null, time: null };
                    }
                } else {
                    result = decodedValue.replace("%40", "@");
                    
                }
            }
        });

        return result;
    }
}


const showInfo = document.querySelector("#thanks");
const timestampData = show("timestamp");

let formattedTime;

if (timestampData) {
    const date = new Date(timestampData.date + "T" + timestampData.time); 

    formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });  // Most common: uses user's locale

} else {
    formattedTime = "Time not available";
}

showInfo.innerHTML = `
<h2>Thank You!</h2>
<p class="app">We appreciate your interest in joining our organization. Your application has been successfully submitted.</p>
<div class="sub-details"><h3>Submission Details</h3>
<p><strong>First Name: </strong>${show("firstname").replace("+", " ")}</p>
<p><strong>Last Name: </strong>${show("lastname")}</p>
<p><strong>Email: </strong>${show("email")}</p>
<p><strong>Number: </strong>${show("phone")}</p>
<p><strong>Business: </strong>${show("orgname").replace("+", " ")}</p>
<p><strong>Submission Date: </strong>${show("timestamp").date} at ${formattedTime}</p><br>
<p>If you're curious or want to explore further, feel free to <a href="#" class="discover">discover more</a>.</p>

`;

// FOOTER
const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const footerParagraphs = document.querySelector("footer").querySelectorAll("p");
footerParagraphs[2].textContent = `©${currentYear} Biliran Chamber of Commerce`;
footerParagraphs[3].textContent = `Last modified: ${lastModifiedDate}`;