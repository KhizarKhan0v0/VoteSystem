let pnum = 0;
let cutler = '';
let a = [];

function submitNames() {
    console.log('calleed');
    for (let i = 0; i < pnum; i++) {
        a[i] = document.getElementById(`input${i + 1}`).value;
    }
    document.getElementById('AddSys').style.display='none';
    for (let i = 0; i < pnum; i++) {
        console.log(a[i]);
    }
    document.getElementById('submitbutton').style.display='none';
    document.getElementById("MainMenu").style.display='block';

}

function generateINP() {
    document.getElementById("MainMenu").style.display='none';
    document.getElementById('AddSys').style.display='flex';
    
    document.getElementById('submitbutton').style.display='block';
    getNumbersParticipants();
    for (let i = 1; i <= pnum; i++) {
        cutler += `<input class="inputs" id='input${i}' type="text" placeholder="Enter Name">`
    }
    document.getElementById('AddSys').innerHTML = cutler;


}

function getNumbersParticipants() {


    pnum = Number(prompt('Enter The Number of Participants :'));

    console.log(pnum);
}
// getNumbersParticipants();
// generateINP();

function voteSys(){
    document.getElementById("MainMenu").style.display='none';
    document.getElementById("votecastD").style.display='flex';
    let nameshower='';
    for(let i=0; i<pnum; i++){
        nameshower += `<button class="namess">${a[i]}</button>`;
    }
    document.getElementById('votecastD').innerHTML=nameshower;


    

}
