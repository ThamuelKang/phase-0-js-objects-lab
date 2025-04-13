//Write your code here

let attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "Javascript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
}


function logAttendeeName(name) {
  attendee.name = name
}

function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice)
}

function updateTicketType(newTicketType) {
  attendee.ticketType = newTicketType;
}

function removeEventProperty() {
  delete attendee.event 
}

function addCheckedInProperty() {
  attendee.addCheckedInProperty = true
}

logAttendeeName("samuel")
console.log(attendee.name)

logTicketPrice(attendee)

updateTicketType("VVVVVIP")
console.log(attendee.ticketType)

removeEventProperty()
addCheckedInProperty()

console.log(attendee)




//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};