var itemList = []

var addBtn = document.getElementById("add")
addBtn.addEventListener("click", addList)

function addList() {
    var item = document.getElementById("item").value
    if (item) {
        itemList.push(item)
        document.getElementById("item").value = ""    
        document.getElementById("item").focus()
    }
    showList()
}

function showList() {
    var list = "<ul>"
    for (var i = 0; i < itemList.length; i++) {
        list += `<li>${itemList[i]}<span id="${i}" class="close">X</span></li>`
    }
    list += "</ul>"
    document.querySelector("#itemList").innerHTML = list
    var remove = document.getElementsByClassName("close")
    for (var i = 0; i < remove.length; i++) {
        remove[i].addEventListener("click", removeList)
    }    
}

function removeList() {
    console.log(this)
    var id = this.getAttribute("id")
    itemList.splice(id,1)
    showList()
}