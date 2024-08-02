function BackToHomePage() {
    window.location.href = "index.html"
}
document.addEventListener("DOMContentLoaded", function () {
    const urlParam = new URLSearchParams(window.location.search);
    const IdParam = urlParam.get("id")

    function displayDetails(id) {
        const detailsContainer = document.getElementById("DetailsContainer")

        if (id) {
            const cardData = getData().find(imageData => imageData.id === parseInt(id));

            if (cardData) {
                const cardElement = document.createElement("div")
                cardElement.classList.add("imageData")

                cardElement.style.backgroundImage = `url('${cardData.src}')`;

                const child = document.createElement("div")
                child.classList.add("child")

                const child0 = document.createElement("div")
                child0.classList.add("child0")

                const imageElement = document.createElement("img")
                imageElement.src = cardData.src

                const child1 = document.createElement("div")
                child1.classList.add("child1")

                const child2 = document.createElement("img")
                child2.classList.add("child2")
                child2.src = cardData.profileImageSrc

                const child3 = document.createElement("div")
                child3.classList.add("child3")

                const titleElement = document.createElement("div")
                titleElement.textContent = cardData.title

                const descriptionElement = document.createElement("div")
                descriptionElement.textContent = cardData.description1

                const timeElement = document.createElement("div")
                timeElement.textContent = cardData.time

                const child4 = document.createElement("div")
                child4.classList.add("child4")

                const Subscribe_Button = document.createElement("button")
                Subscribe_Button.textContent = "Subscribe"

                const Remove_Button = document.createElement("button")
                Remove_Button.textContent = "Remove"

                Remove_Button.addEventListener("click", function () {
                    const cardId = cardData.id
                    removeCardById(cardId);
                    alert("Card removed successfully");
                    window.location.href = "index.html";
                });

                function removeCardById(cardId) {
                    const newData = getData().filter(imageData => imageData.id !== cardId);
                    localStorage.setItem('localCardsData', JSON.stringify(newData));
                }

                child4.appendChild(Subscribe_Button)
                child4.appendChild(Remove_Button)
                child3.appendChild(titleElement)
                child3.appendChild(descriptionElement)
                child3.appendChild(timeElement)
                child1.appendChild(child2)
                child1.appendChild(child3)
                child1.appendChild(child4)
                child0.appendChild(imageElement)
                child0.appendChild(child1)
                child.appendChild(child0)
                cardElement.appendChild(child)
                detailsContainer.appendChild(cardElement)

            }
        }
    }

    const commentForm = document.getElementById("CommentForm");
    commentForm.addEventListener("submit", handleCommentSubmit)

    function addComment(cardId, commentMessage) {
        const data = getData()
        const card = data.find(imageData => imageData.id === parseInt(cardId));
        if (card) {
            const newComment = {
                id: card.comments.length ? card.comments[card.comments.length - 1].id + 1 : 1,
                message: commentMessage
            };
            card.comments.push(newComment)
            localStorage.setItem('localCardsData', JSON.stringify(data));
        }
    }

    function handleCommentSubmit(event) {
        event.preventDefault();
        const commentInput = document.getElementById("CommentInput");
        const commentMessage = commentInput.value.trim();

        if (commentMessage) {
            addComment(IdParam, commentMessage);
            commentInput.value = '';
            displayComments(IdParam)
        }
    }

    function displayComments(id) {
        const cardData = getData().find(imageData => imageData.id === parseInt(id));
        const commentDropdown = document.getElementById("CommentDropdown")
        commentDropdown.innerHTML = '';

        const placeholderOption = document.createElement("option");
        placeholderOption.textContent = "Previous comments";
        placeholderOption.disabled =true;
        placeholderOption.selected = true;
        commentDropdown.appendChild(placeholderOption);

        if (cardData && cardData.comments) {
            cardData.comments.forEach(comment => {
                const option = document.createElement("option");
                option.textContent = comment.message;
                commentDropdown.appendChild(option)
            });
        }
        commentDropdown.addEventListener("change", function() {
            if (this.selectedIndex !== 0) {
                this.selectedIndex = 0;
            }
        });
    }

    displayDetails(IdParam)
    displayComments(IdParam)
})