import makeJournalEntryComponent from "./BuildJournalEntry.js"

// Printing to the Dom 

const renderJournalEntries = (entries) => {
    entries.forEach(
      singleEntry =>(document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent.buildEntryCard(singleEntry)
    
     ) )}

// Exporting to Api Manager
export default renderJournalEntries;