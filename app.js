const contacts = [
    { name: "Picard", phone: "555-555-5555" },
    { name: "Crusher, B", phone: "555-555-5555" },
    { name: "La Forge", phone: "555-555-5555" },
  ]

const searchedName = "Crusher, B";

const addedName = "Worf"

const mainDiv = document.getElementById('main')

const newPara = `
            <p>${validName(contacts, searchedName)}</p>
            `

mainDiv.insertAdjacentHTML("beforeend", newPara);

contacts.push(addContact(contacts, addedName));
  
function validName(contactArray, name) {
      for (item of contactArray) {
        console.log(item)
        if (item.name == name) {
            console.log(item.name)
            const searchedContact = item.name + ' ' + item.phone
            return searchedContact
      }
    }
    return "contact not found"
  }

function addContact(contactArray, name) {
      for (item of contactArray) {
        if (item == name) {
          return
        }
      }
  addNamePhone = {name: name, phone: "555-555-5555"}
  return addNamePhone
}

console.log(contacts)