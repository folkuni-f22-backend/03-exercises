import { readFile, writeFile } from 'node:fs/promises'
import { question } from 'readline-sync'

const filename = 'guestbook.txt'

// Starta programmet med menyn
menu()

async function menu() {
	console.log('\nWelcome to the guestbook! Choose an option:')
	console.log('1. View guestbook')
	console.log('2. Add a new name')
	console.log('3. Clear the guestbook')
	console.log('4. Exit')

	let chosen = question('? ')

	if( chosen === '1' ) {
		await printGuestbook()
	}
	else if( chosen === '4' ) {
		console.log('Welcome back...')
		return
	}
	// Rekursiv funktion - menu anropar sig själv
	menu()
}

async function printGuestbook() {
	let buffer = await readFile(filename)
	let contents = buffer.toString()
	// String(buffer) eller buffer + ''
	console.log('Printing guestbook:\n' + contents)
}
async function writeGuestbook(newName) {
	await writeFile(filename, newName)
}
async function addToGuestbook(newName) {
	let buffer = await readFile(filename)
	let contents = buffer.toString()
	await writeFile(filename, contents + '\n' + newName)
}

// await writeGuestbook('Ann-Sophie')
// await addToGuestbook('Viktor')
// await printGuestbook()

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