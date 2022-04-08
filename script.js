document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name:'exodia',
            img:'img/exodia.jpg'
        },
        {
            name:'exodia',
            img:'img/exodia.jpg'
        },
        {
            name:'jinzo',
            img:'img/jinzo.jpg'
        },
        {
            name:'jinzo',
            img:'img/jinzo.jpg'
        },
        {
            name:'kuriboh',
            img:'img/kuriboh.jpg'
        },
        {
            name:'kuriboh',
            img:'img/kuriboh.jpg'
        },
        {
            name:'skull',
            img:'img/skull.jpg'
        },
        {
            name:'skull',
            img:'img/skull.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    function createBoard() {

        for(let i = 0; i<cardArray.length; i++){

            var card = document.createElement('img');
            card.setAttribute('src', 'img/face.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    };


    function checkForMatch(){

        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId= cardsChosenId[1];

        if(cardsChosen[0] === cardsChosen[1]) {

            alert('Bien joué tu as trouvé un match');
            cards[optionOneId].setAttribute('src', 'img/blank.png' );
            cards[optionTwoId].setAttribute('src', 'img/blank.png' );
            cardsWon.push(cardsChosen);

        } else{

            cards[optionOneId].setAttribute('src', 'img/face.jpg' );
            cards[optionTwoId].setAttribute('src', 'img/face.jpg' );
            alert('Essaie encore');
        }

        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length

        if(cardsWon.length === cardArray.length/2){

            resultDisplay.textContent = 'Felicitations'
        }
    }


    function flipCard(){

        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if(cardsChosen.length === 2){

            setTimeout(checkForMatch, 500)
        }
    }

    createBoard();
})