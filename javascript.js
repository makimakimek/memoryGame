    function memoryGame() {
    //card creation
    const cardGame = document.querySelector("#cardGame");
    let numberArray = [];
    let openCards = [];
    let numberOfOpenCards = 0;
    let numberOfMatches = 0;

    for (let i = 0; i < 6; i++) {
        const cardRow = document.createElement("div");
        cardRow.setAttribute("id", "cardRow");
        cardGame.appendChild(cardRow);

        for (let j = 0; j < 6; j++) {
        const card = document.createElement("div");
        let cardId = `card${i * 6 + j + 1}`;
        card.setAttribute("id", cardId);
        cardRow.appendChild(card);

        const cardText = document.createElement("div");
        cardText.setAttribute("id", "cardText");
        let number = randomNumberGenerator();

        while (numberArray.filter((num) => num === number).length >= 2) {
            number = randomNumberGenerator();
        }

        cardIsGood = false;

        cardText.textContent = number;
        card.appendChild(cardText);

        numberArray[i * 6 + j] = number;

        card.addEventListener("click", (event) => {
            card.style.backgroundColor = "#F9F6F0";
            cardText.style.fontSize = "40px";

            let openCardId = card.getAttribute("id");

            openCards.push(openCardId);

            numberOfOpenCards++;

            if (numberOfOpenCards === 2) {
            setTimeout(() => {
                const openCard1 = document.querySelector(`#${openCards.pop()}`);
                const openCard2 = document.querySelector(`#${openCards.pop()}`);

                if (
                openCard1.firstChild.textContent ===
                openCard2.firstChild.textContent
                ) {
                openCard1.style.visibility = "hidden";
                openCard2.style.visibility = "hidden";

                numberOfMatches++;

                if (numberOfMatches === 18) {
                    const winner = document.createElement("div");
                    winner.setAttribute("id", "winnerText");
                    winner.textContent = "Congrats, you've won!";

                    const page = document.querySelector("#page");
                    page.appendChild(winner);
                }
                }

                openCard1.style.backgroundColor = "rgb(194, 58, 58)";
                openCard2.style.backgroundColor = "rgb(194, 58, 58)";

                openCard1.firstChild.style.fontSize = "0px";
                openCard2.firstChild.style.fontSize = "0px";

                numberOfOpenCards = 0;
            }, 1000);
            }
        });
        }
    }
    }

    function randomNumberGenerator() {
    let number = Math.random() * 18; //bc we have 36/2 options
    number = Math.floor(number) + 1;
    return number;
    }

    memoryGame();
