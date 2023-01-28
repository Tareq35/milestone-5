function addPlayers(element) {
    const playersName = element.parentNode.parentNode.children[0].innerText;

    if (players.length <= 4) {
        players.push(playersName);
        displayPlayer()

        const button = element.parentNode.children[0];
        button.setAttribute('disabled', true)
        button.style.backgroundColor = 'gray';
        button.style.color = 'black';
    }
    else {
        alert('You have already added 5 players.')
    }
}


let players = []

function displayPlayer() {
    const playersContainer = document.getElementById('add-player');

    playersContainer.innerHTML = '';
    for (let i = 0; i < players.length; i++) {
        const div = document.createElement("div");
        div.className = 'flex'
        div.innerHTML = `
        <p>${i + 1}.</p>
        <p> ${players[i]}</p>
        `;
        playersContainer.appendChild(div);
    }
}
