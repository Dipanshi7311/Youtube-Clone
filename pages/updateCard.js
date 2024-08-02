document.addEventListener("DOMContentLoaded", function () {
    const mainIconDiv = document.getElementById("icon")
    const icon1 = document.getElementById("without_fill_pencil")
    const icon2 = document.getElementById("with_fill_pencil")

    mainIconDiv.addEventListener("mouseover", function () {
        icon1.style.display = "none";
        icon2.style.cursor = "pointer";
        icon2.style.display = "block";
    })
    mainIconDiv.addEventListener("mouseout", function () {
        mainIconDiv.style.cursor = "pointer";
        icon2.style.display = "none";
        icon1.style.display = "block";
        icon1.style.cursor = "pointer";
    })
    mainIconDiv.addEventListener("click", function () {
        alert("You can edit according to your requirements.")
    })
})
document.addEventListener("DOMContentLoaded", function () {
    console.log(imageCardsData);

    const urlParam = new URLSearchParams(window.location.search)
    const cardIdParam = urlParam.get("id")
    console.log(cardIdParam)

    function getCardDetailsById(cardId) {
        return imageCardsData.find(imageData => imageData.id === cardId)
    }
    if (cardIdParam) {
        updateFormInputs(parseInt(cardIdParam, 10))
    }
    function updateFormInputs(cardId) {
        const cardDetails = getCardDetailsById(cardId);

        if (cardDetails) {
            document.getElementById("Card_ID").value = cardDetails.id;
            document.getElementById("Image_URL").value = cardDetails.src;
            document.getElementById("Profile_Url").value = cardDetails.profileImageSrc;
            document.getElementById("Title").value = cardDetails.title;
            document.getElementById("Description1").value = cardDetails.description1;
            document.getElementById("time").value = cardDetails.time;
        }
    }
})
document.addEventListener("DOMContentLoaded", function () {
    const updateCardButton = document.getElementById("createCard");
    if (updateCardButton) {
        updateCardButton.addEventListener("click", updateCard)
    }

    function updateCard() {
        const cardId = document.getElementById("Card_ID").value;
        const cardIndex = imageCardsData.findIndex(imageData => imageData.id === parseInt(cardId, 10));
        const updateCardDetails = {
            id: document.getElementById("Card_ID").value,
            src: document.getElementById("Image_URL").value,
            title: document.getElementById("Title").value,
            description1: document.getElementById("Description1").value,
            time: document.getElementById("time").value,
            profileImageSrc: document.getElementById("Profile_Url").value,
        }

        if (cardIndex != -1) {
            imageCardsData[cardIndex] = { ...imageCardsData[cardIndex], ...updateCardDetails }
            console.log("New array", imageCardsData)
            localStorage.setItem('localCardsData',JSON.stringify(imageCardsData));
            window.location.href="index.html"
        }
    }
})