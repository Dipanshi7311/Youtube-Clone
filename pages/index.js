function Open_Side_Nav() {
    document.getElementById("Scroller").classList.toggle("SideScroller")
    document.getElementById("Main_Content").classList.toggle("SideMainCotent")
    document.getElementById("Side_Navigation").classList.toggle("Side_Navigation_Bar")
    document.getElementById("Navigation_Icons_Text1").classList.toggle("DisplayTextIcons")
    document.getElementById("Navigation_Icons_Text2").classList.toggle("DisplayTextIcons")
    document.getElementById("Navigation_Icons_Text3").classList.toggle("DisplayTextIcons")
    document.getElementById("Navigation_Icons_Text4").classList.toggle("DisplayTextIcons")
    document.getElementById("Navigation_Icons_Text5").classList.toggle("DisplayTextIcons")
    document.getElementById("Navigation_Icons_Text6").classList.toggle("DisplayTextIcons")
    document.getElementById("Navigation_Icons_Text7").classList.toggle("DisplayTextIcons")
}
document.addEventListener("DOMContentLoaded", function () {
    const myList = ["All", "Mixes", "Music", "Karan Aujla", "Arijit Singh", "Chill-Out", "Motorcycle", "Comedy", "Bhajan Music", "Watched", "New to you", "BB ki Vines", " KK", "Live"];
    const listContainer = document.getElementById("Entered_Content");

    myList.forEach(item => {
        const div = document.createElement("div");
        div.textContent = item;
        listContainer.appendChild(div);
    });
});
function Add_Card() {
    window.location.href = "AddCard.html"
}
document.addEventListener("DOMContentLoaded", function () {
    const storedData = localStorage.getItem("signUpDataKey")

    if (!storedData) {
        window.location.href = "LoginAndSignUp.html"
    }
})
document.addEventListener("DOMContentLoaded", function () {
    const profile = document.getElementById("Profile")
    const profile_dropdown = document.getElementById("Profile_dropdown")
    const LogOut = document.getElementById("Logout")

    profile.addEventListener("click", function () {
        profile_dropdown.classList.toggle("Profile_dropdown_show")
    })
    if (LogOut) {
        LogOut.addEventListener("click", function () {
            // localStorage.clear()
            window.location.href = "LoginAndSignUp.html"
        })
    }
})

// window.addEventListener("beforeunload", function () {
//     localStorage.clear()
// });

//original
document.addEventListener("DOMContentLoaded", function () {
    const mainContentTable = document.getElementById("Main_Content_Table")
    const mainContentGrid = document.getElementById("Main_Content_Grid")
    const imageContainer = document.getElementById("Card_Container");
    const searchInput = document.getElementById("Search_bar");
    const searchButton = document.getElementById("Search_button");
    const hiddenDiv = document.getElementById("Search_Close_Button");
    const sortOptions = document.getElementById("sort_with_selection");
    const tableBody = document.querySelector("#Main_Content_Table tbody")
    const switchView = document.getElementById("Switch_View")
    const toggleOff = document.getElementById("toggle_icon_off");
    const toggleOn = document.getElementById("toggle_icon_on");
    const storedData = localStorage.getItem("localCardsData")

    toggleOn.classList.toggle("hidden");
    mainContentTable.style.display = "none"

    switchView.addEventListener("click", function () {
        if (toggleOff.classList.contains("hidden")) {
            toggleOff.classList.remove("hidden");
            toggleOn.classList.add("hidden");
            mainContentTable.style.display = "none"
            mainContentGrid.style.display = "block"
        } else {
            toggleOff.classList.add("hidden");
            toggleOn.classList.remove("hidden");
            mainContentGrid.style.display = "none"
            mainContentTable.style.display = "block"
        }
    });

    if (storedData) {
        const tableData = JSON.parse(storedData)
        
        tableData.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td class="TableRowid" >${item.id}</td>
            <td><img src="${item.src}" alt="img" class="CardImage"></td>
            <td class="TableRowTitle">${item.title}</td>
            <td class="TableRowDescription">${item.description1}</td>
            <td><img src="${item.profileImageSrc} alt="profileImg" class="ProfileImg"></td>
            <td class="TableRowTime">${item.time}</td>
            <td><button style="background-color:rgb(115, 115, 182);" onclick="window.location.href='updateCard.html?id=${item.id}'">Update</button>
            <button class="tableRemoveButton" style="background-color:#cf2828;">Remove</button></td>
            `;
            tableBody.appendChild(row)

            const removeButton = row.querySelector(".tableRemoveButton")
            removeButton.addEventListener("click", function () {
                const cardId=item.id
                const newData = getData().filter(imageData => imageData.id !== cardId);
                localStorage.setItem('localCardsData', JSON.stringify(newData));
                row.remove()
            })
        })

        sortOptions.addEventListener("change", function () {
            const sortingOrder = sortOptions.value
            const rows = Array.from(tableBody.querySelectorAll("tr"));

            rows.sort((a, b) => {
                const textA = a.cells[2].textContent.trim().toLowerCase()
                const textB = b.cells[2].textContent.trim().toLowerCase();
                const dateA=new Date(a.cells[5].textContent.trim())
                const dateB=new Date(b.cells[5].textContent.trim())
                console.log(dateA)
                console.log(dateB)
                console.log(dateB-dateA)
                console.log(dateA-dateB)

                if(sortingOrder==='date_asc'){
                    return dateA-dateB
                }else if(sortingOrder==='date_dsc'){
                    return dateB-dateA
                }else if (sortingOrder === "asc") {
                    return textA.localeCompare(textB)
                } else if (sortingOrder === 'dsc') {
                    return textB.localeCompare(textA)
                } else {
                    console.log("Invalid sorting order..!")
                    return 0;
                }
            })
            tableBody.innerHTML=""
            rows.forEach(row => tableBody.appendChild(row))
        })
    } else {
        console.log("No data found in local storage.")
    }

    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase();
        const rows = Array.from(tableBody.children)

        rows.forEach(row => {
            const title = row.cells[2].textContent.toLowerCase();
            if (title.includes(searchValue)) {
                row.style.display = ''
            } else {
                row.style.display = 'none'
            }
        })
    })

    function displayImageCards(data) {
        imageContainer.innerHTML = '';

        data.forEach(imageData => {
            const card = document.createElement("div");
            card.classList.add("card");

            const image = document.createElement("img");
            image.src = imageData.src;
            image.alt = imageData.title;

            const child = document.createElement("div");
            child.classList.add("child");

            const profileImage = document.createElement("img");
            profileImage.src = imageData.profileImageSrc;
            profileImage.alt = "ProfileDp";
            profileImage.style.width = "30px";
            profileImage.style.borderRadius = "999px";

            const child2 = document.createElement("div");
            child2.classList.add("child2");

            const titleLink = document.createElement("a")
            titleLink.href = `details.html?id=${imageData.id}`
            titleLink.textContent = imageData.title;

            const description1 = document.createElement("p");
            description1.textContent = imageData.description1;
            description1.style.fontSize = "12px";
            description1.style.color = "#737373";

            const time = document.createElement("p")
            time.textContent = imageData.time;
            time.style.fontSize = "12px";
            time.style.color = "#737373";
            time.style.margin = "5px 0px";

            const child3 = document.createElement("div");
            child3.classList.add("child3");

            const DeleteCardButton = document.createElement("button")
            DeleteCardButton.textContent = "Remove";

            DeleteCardButton.addEventListener("click", function () {
                card.remove()

            })
            const UpdateCardButton = document.createElement("button")
            UpdateCardButton.textContent = "Update";
            UpdateCardButton.style.backgroundColor = "#7373b6";
            UpdateCardButton.addEventListener("click", function () {
                window.location.href = `updateCard.html?id=${imageData.id}`
            })


            card.appendChild(image);
            child.appendChild(profileImage)
            child2.appendChild(titleLink)
            child2.appendChild(description1);
            child2.appendChild(time)
            child3.appendChild(DeleteCardButton)
            child3.appendChild(UpdateCardButton)
            child.appendChild(child2)
            child.appendChild(child3)
            card.appendChild(child)
            imageContainer.appendChild(card);
        })
    }

    function handleSearch() {
        const searchValue = searchInput.value.toLowerCase();
        if (searchValue.trim() === '') {
            displayImageCards(getData());
        } else {
            const searchedCards = getData().filter(item => item.title.toLowerCase().includes(searchValue));
            displayImageCards(searchedCards);
        }
    }

    if (searchButton && searchInput) {
        searchButton.addEventListener("click", handleSearch);

        // Initial display of all image cards
        displayImageCards(getData());
    }

    hiddenDiv.addEventListener("click", function () {
        location.reload()
    });

    function sortCards() {
        const sortingOrder = sortOptions.value;

        let sortedCards;
        let sortedData = [...getData()];

        if (sortingOrder === 'date_asc') {
            sortedCards = sortedData.sort((a, b) => new Date(a.time) - new Date(b.time));
        } else if (sortingOrder === 'date_dsc') {
            sortedCards = sortedData.sort((a, b) => new Date(b.time) - new Date(a.time));
        } else if (sortingOrder === 'asc') {
            sortedCards = sortedData.sort((a, b) => a.title.trim().localeCompare(b.title));
        } else if (sortingOrder === 'dsc') {
            sortedCards = sortedData.sort((a, b) => b.title.trim().localeCompare(a.title));
        } else {
            console.log("Cannot Sort the cards")
        }
        displayImageCards(sortedCards);
    }

    displayImageCards(getData())
    sortOptions.addEventListener("change", sortCards)
});





