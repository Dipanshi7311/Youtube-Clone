document.addEventListener("DOMContentLoaded", function () {
    const reset = document.getElementById('reset')
    const createCardButton = document.getElementById("createCard");

    let Imageinput, Profileinput, TitleInput, description1Input, timeInput;

    Imageinput = document.getElementById('Image_URL');
    Profileinput = document.getElementById('Profile_Url');
    TitleInput = document.getElementById('Title');
    description1Input = document.getElementById('Description1');
    timeInput = document.getElementById('time');

    if (reset) {
        reset.addEventListener("click", clearInputs);
    }
    if (createCardButton) {
        createCardButton.addEventListener("click", createCard);
    }

    function createCard() {
        const src = Imageinput.value;
        const title = TitleInput.value;
        const profileImageSrc = Profileinput.value;
        const description1 = description1Input.value;
        const time = timeInput.value;

        if (src && profileImageSrc && title && description1 && time) {
            const createdCardDetails = { src, profileImageSrc, title, description1, time }
            
            localStorage.getItem('localCardsData',JSON.stringify(imageCardsData))
            imageCardsData.push(createdCardDetails)
            // getData().push(createdCardDetails);
            localStorage.setItem('localCardsData',JSON.stringify(imageCardsData));
            console.log("Card added to array:",getData());

            alert("Card Added successfully to the array");
            
            window.location.href = "index.html"
        } else {
            alert("Please fill all details")
        }
    }

    function clearInputs() {
        Imageinput.value = '';
        Profileinput.value = '';
        TitleInput.value = '';
        description1Input.value = '';
        timeInput.value = '';
    }

});