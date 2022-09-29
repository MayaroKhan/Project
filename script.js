const userCardTemplet = document.querySelector("[user-data-templet]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let user = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    user.forEach(user => {
        const isVisible = user.name.toLowerCase().include(value)  || user.profession.toLowerCase().include(value)
    }
        )
})

fetch("")
    .then(data => {
        data.forEach(user => {
            const card = userCardTemplet.textContent.cloneNode(true).children[0]
            const header = card.querySelector("[userdataheader]")
            const body = card.querySelector("[userdatabody]")
            header.textContent = user.name
            boder.textContent = user.profession
            return { name: user.name, }
        })
    })