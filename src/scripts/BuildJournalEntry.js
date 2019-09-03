

// Building the Journal with a function and method. HTML for a single journal Entry
const makeJournalEntryComponent = { 
    buildEntryCard: (singleJournalObject) =>{
    return `<section>
   <h3>${singleJournalObject.date}</h3>
   <p>${singleJournalObject.concept}</p>
   <p>${singleJournalObject.entry}</p>
   <p>${singleJournalObject.mood}</p>
   </section>`;
  
  }}

// Exporting to DomPrint
export default makeJournalEntryComponent;

  