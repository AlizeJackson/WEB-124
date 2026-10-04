const playlist = document.querySelector('#playlistContainer');
const addSongBtn = document.querySelector('#addBtn');
const songTitle = document.querySelector('#songTitle');
const songArtist = document.querySelector('#songArtist');

function addSong(title, artist) {
    const songCard = document.createElement('article');
    songCard.classList.add("songCard");
    
    const songInfo = document.createElement('span');
    songInfo.textContent = `${title} - ${artist}`;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    
    songCard.appendChild(songInfo);
    songCard.appendChild(deleteBtn);
    
    playlist.appendChild(songCard);
}

function handleAddButtonClick() {
    const title = songTitle.value.trim();
    const artist = songArtist.value.trim();
    
    if (title && artist) {
        addSong(title, artist);
        
        songTitle.value = '';
        songArtist.value = '';
    }
}

addSongBtn.addEventListener('click', handleAddButtonClick);

function handleplaylistClick(event) {
    if (event.target.classList.contains('deleteBtn')) {
        event.target.parentElement.remove();
        console.log ('The event has bubbled up to the playlist container!');
    }
}

playlist.addEventListener('click', handleplaylistClick);




