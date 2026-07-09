
document.getElementById("add-button").addEventListener("click", function () {
    let div = document.createElement("div")

    let input = document.createElement("input");
    input.type = "text";

    let del = document.createElement("button");
    del.textContent = "Trash"
    del.addEventListener("click", function () {
        div.remove()
    });


    let done = document.createElement("button");
    done.textContent = "✅"
    done.addEventListener("click", function () {
        let completed = document.createElement("p")
        completed.textContent = div.children[0].value
        document.getElementById("completed").appendChild(div)

        div.remove()
        alert("Task Completed")
    })

    div.className = "item";
    div.appendChild(input);
    div.appendChild(del);
    div.appendChild(done);

    document.getElementById("items").appendChild(div)
})