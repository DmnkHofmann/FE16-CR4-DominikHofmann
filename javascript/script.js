let htmlcards = JSON.parse(cards);
function updateHTML(arr) {
    const resultscontainer = document.getElementById("results");
    resultscontainer.innerHTML = "";
    for (let x of arr) {
        resultscontainer.innerHTML += `
<div class="col-lg-4 col-sm-6 col-xs-12">
    <div class="card"   >
        <img src="${x.image}" class="card-img-top img-thumbnail taskimage" alt="HansZimmer">
        <div class="card-body">
            <div class="row">
                <h5>${x.title}</h5>
                <p class="card-text">${x.description}.</p>
                <hr>
                <div class="row">
                <div class="col-md-12">
                    <p><i class="bi bi-exclamation-triangle-fill"></i> Priority level:</p> 
                    <button class="btn-priority btn ${prioritybuttonclass(x.priority)}"> ${x.priority}</button>
                    </div>
                    </div>
                <p><i class="bi bi-calendar4-week"></i> Deadline: ${x.deadline}</p>
                <hr>
                <div class="col-md-4 mx-2 d-flex align-items-center">
                <button type="button" class="btn btn-danger d-flex align-items-center"><i class="bi bi-trash-fill"></i> Delete</button>
                <button type="button" class="btn btn-success d-flex align-items-center"><i class="bi bi-check-circle"></i> Done</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
    }
    setuplisteners();
}
function prioritybuttonclass(n) {
    if ([0,1].includes(n)) {
        return "btn-success"
      } else if ([2,3].includes(n)) {
        return "btn-warning"
      } else {
        return "btn-danger"
      }
}
function setuplisteners(){
    let btns = document.getElementsByClassName("btn-priority");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
        htmlcards[i].priority++;
        updateHTML(htmlcards);
  });
}
}
document.getElementById("priority-sort").addEventListener("click", function () {
    htmlcards = htmlcards.sort((a, b) => (a.priority > b.priority) ? -1 : 1)
    updateHTML(htmlcards);
})

updateHTML(htmlcards);