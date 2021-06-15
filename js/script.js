//PARTE 1
//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.

var studentList = {
    student : [{name: "Noemi", surname: "Patermo", età: "35"}]

}
for (var x = 0; x < studentList.student.length; x++) {
    console.log(studentList.student[x])
    //prendo la chiave all'interno dell'oggetto
    for (var k in studentList.student[x]) {
        
        console.log(k,studentList.student[x][k])
    }
    
}
//PARTE 2
//Creare un array di oggetti di studenti. 
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.  
//Ricordatevi, è un array, quindi? for.

//crea array di oggetti di studenti

var studentList = [
    {name: "Noemi", surname: "Patermo", età: "35"},
    {name: "Pietro", surname: "Patermo", età: "33" },
    {name: "Eliana", surname: "Patermo", età: "30"}
    ];
for (var x = 0; x < studentList.length; x++){
    console.log(studentList[x])
}


//PARTE 3
//Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - di 
//aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.

/* OPPURE

var studentList = {
    student : []
}
while (studentList.student.length < 1){
    var nameStudent = prompt("Inserisci il nome ")
    var surnameStudent = prompt(" Inserisci il cognome ")
    var ageStudent = prompt(" Inserisci l'età ")
    studentList.student.push({
        name: nameStudent,
        surname: surnameStudent, 
        age : ageStudent 
    });
}
console.log(studentList);
*/

