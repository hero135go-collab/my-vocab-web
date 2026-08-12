function searchWord() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let table = document.getElementById("vocabTable");
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let tdWord = tr[i].getElementsByTagName("td")[0];
        let tdMeaning = tr[i].getElementsByTagName("td")[2];
        
        if (tdWord || tdMeaning) {
            let wordValue = tdWord.textContent || tdWord.innerText;
            let meaningValue = tdMeaning.textContent || tdMeaning.innerText;
            
            if (wordValue.toLowerCase().indexOf(input) > -1 || meaningValue.toLowerCase().indexOf(input) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}