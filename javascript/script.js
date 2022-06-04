let htmlcards = JSON.parse(cards);
function updateHTML(arr) {
    const resultscontainer = document.getElementById("results");
    resultscontainer.innerHTML = "";
    for (let x of arr) {
        resultscontainer.innerHTML += `
<div class="col-lg-4 col-sm-6 col-xs-12 my-3">
    <div class="card shadow-lg bg-body rounded">
        <div class="row">
        <div class="col-12">
        <div class="row d-flex justify-content-between">
        <div class="col-4">
        <button type="button" class="btn btn-info m-1 py-1">Task</button>
        </div>
        <div class="col-4 pt-2" style="text-align:right">
        <span><i class="bi bi-bookmark"></i></span> 
        <span><i class="bi bi-three-dots-vertical"></i></span>
        </div>
        </div>
        </div>
        <div class="col-12">
        <img src="${x.image}" class="card-img-top img-thumbnail taskimage" alt="HansZimmer">
        </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-12">
                    <h5 class="text-center">${x.title}</h5>
                    <p class="card-text text-center">${x.description}.</p>
                    <hr>
                <div class="row">
                    <div class="col-md-12">
                        <span><i class="bi bi-exclamation-triangle-fill"></i> Priority level:</span>   
                        <button class="btn-priority btn ${prioritybuttonclass(x.priority)}"> ${x.priority}</button>
                    </div>
                </div>
                <div class="row">
                    <p><i class="bi bi-calendar4-week"></i> Deadline: ${x.deadline}</p>
                    <hr>
                 </div>
                <div class="row">
                    <div class="col-md-12 text-end">
                        <button type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i> Delete</button>
                        <button type="button" class="btn btn-success"><i class="bi bi-check-circle"></i> Done</button>
                     </div>
                    </div>
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