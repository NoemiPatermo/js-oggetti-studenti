//PARTE 1
//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.
var studentList = {
    student : [{name: "Noemi", surname: "Patermo", età: "35"},
                {name: "Pietro", surname: "Patermo", età: "33" },
                {name: "Gabriele", surname: "Sanna", età: "21"}]

}
for (var x = 0; x < studentList.student.length; x++) {
    console.log(studentList.student[x])
    //prendo la chiave all'interno dell'oggetto
    for (var k in studentList.student[x]) {
        
        console.log(k,studentList.student[x][k])
    }
    
}

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
//PARTE 2
//Creare un array di oggetti di studenti. 
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.  
//Ricordatevi, è un array, quindi? for.
    
