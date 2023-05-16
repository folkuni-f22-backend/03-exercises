import { readFile } from 'node:fs/promises'

const filename = 'guestbook.txt'

async function printGuestbook() {
	let buffer = await readFile(filename)
	let contents = buffer.toString()
	// String(buffer) eller buffer + ''
	console.log('Printing guestbook:\n' , contents)
}

printGuestbook()

/*
5 Skapa en fil med namnet "guestbook.txt" och skriv ditt namn på första raden i den.Skriv ett skript som skriver ut innehållet i gästboken på konsolen.


6a Skriv ett skript som ersätter innehållet i gästboken med ett nytt namn.
6b Gör om koden så att den lägger till namnet i stället för att ersätta befintlig text.


7 Kombinera 5 och 6 i ett skript som loopar med en meny.Exempel på meny:
Välkommen till gästboken! Välj ett alternativ:
[1] Visa alla besökare
[2] Lägg till ett namn i boken
[3] Rensa gästboken
[4] Avsluta
*/