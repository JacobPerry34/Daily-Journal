import renderJournalEntries from "./DomPrint.js"
// Fetches info form API
const apiEntries ={
    getAllEntries: () => {
        return fetch(" http://localhost:8088/entries")
  .then(response => response.json())
  .then(journalEntryToPrint=>{
    //   journalEntryToPrint.forEach(singleEntry => {
    //       document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent.buildEntryCard(singleEntry)
    //   } )
    renderJournalEntries(journalEntryToPrint)
  }
  )
}
}

// Exporting object to Journal.js
export default apiEntries;
