//PARTE 1
//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.


   var student = {
       name: "Noemi", 
       surname: "Patermo", 
       età: "35"
    } 

    //prendo la chiave all'interno dell'oggetto
    for (var k in student) {
        
        console.log(k,student[k])
    
   document.getElementById("output").innerHTML +=  student[k] + " \n  "; 
    }

//PARTE 2
//Creare un array di oggetti di studenti. 
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.  
//Ricordatevi, è un array, quindi? for.

//crea array di oggetti di studenti

var gymList = [
    {name: "Noemi", surname: "Patermo", età: "35"},
    {name: "Pietro", surname: "Patermo", età: "33" },
    {name: "Eliana", surname: "Patermo", età: "30"}
    ]

    for (var x = 0; x < gymList.length; x++){
        console.log(gymList[x].name)        //richiamo col . la proprietà che mi interessa far stampare 
        console.log(gymList[x].surname)

    /*ALTRO MODO è IL FOR IN 
        for (var k in gymList[x]) {
        console.log(k, gymList[x][k])
    
     document.getElementById("output2").innerHTML += gymList[x] [k] + "   " ;
    }*/
 }

//PARTE 3
//Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - di 
//aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.



var classList = {
    student : []
}
    var nameStudent = prompt("Inserisci il nome ")
    var surnameStudent = prompt(" Inserisci il cognome ")
    var ageStudent = prompt(" Inserisci l'età ")

    classList.student.push({
        name: nameStudent,
        surname: surnameStudent, 
        age : ageStudent 
    });

for(var x = 0; x < classList.student.length; x++){
    for (var k in classList.student[x]) {
        document.getElementById("output3").innerHTML += classList.student[x][k];
    }
}


