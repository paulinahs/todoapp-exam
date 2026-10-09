# ToDo App
 

En enkel ToDo-applikation byggd med React där användaren kan lägga till, markera som klar och ta bort uppgifter. Appen uppdateras dynamiskt med hjälp av Reacts state-hantering utan att sidan behöver laddas om.

---
 
## Muntlig redovisning
 
Videolänk:
 
[[Link](https://funet-my.sharepoint.com/:v:/g/personal/3ggyhmu26_hesspa_folkuniversitetet_nu/IQAqoYNhXuF0R4EIGuwDpB3nAcEiKObnJiANohqors6xi-c?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=B9xFt1)]
 


---
 
## Funktioner
 
- Lägga till nya uppgifter
- Validering som förhindrar tomma uppgifter
- Markera uppgifter som klara eller ogjorda
- Tydlig visuell skillnad mellan klara och ogjorda uppgifter
- Ta bort enskilda uppgifter
- Dynamisk uppdatering av gränssnittet med React
 
---
 
## Frågor om koden
 
### 1. State-hantering
 
Min app använder Reacts `useState` för att lagra alla uppgifter i en array. Varje uppgift innehåller en text och en status som visar om den är klar eller inte. När användaren lägger till, markerar eller tar bort en uppgift uppdateras state. React renderar då om komponenten automatiskt, vilket gör att gränssnittet uppdateras direkt utan att sidan laddas om.
 
### 2. Oföränderlighet (Immutability)
 
Man ska inte ändra en befintlig array direkt med exempelvis `.push()` eftersom React kanske inte upptäcker att state har förändrats. Istället skapar man en ny kopia av arrayen och uppdaterar den. När jag lägger till en uppgift använder jag spread-operatorn (`...`) för att skapa en ny array, och när jag tar bort en uppgift använder jag `filter()` som returnerar en ny array.

---
 
## Kodgranskning
 
Följande kod innehåller ett problem i ett React-sammanhang:
 
```javascript
function addTodo(todos, text) {
todos.push(text);
return todos;
}
```
 
Problemet är att funktionen använder `.push()` direkt på den befintliga arrayen. Detta ändrar originalarrayen istället för att skapa en ny kopia. React rekommenderar att state behandlas som oföränderligt eftersom det hjälper React att upptäcka förändringar och uppdatera gränssnittet korrekt.
 
Jag skulle istället skriva funktionen så här:
 
```javascript
function addTodo(todos, text) {
return [...todos, text];
}
```

Denna lösning skapar en ny array som innehåller alla tidigare uppgifter samt den nya uppgiften. Originalarrayen lämnas oförändrad.

---
 
## Problemlösning & Reflektion
 
När jag körde fast försökte jag först dela upp problemet i mindre delar och fokusera på en funktion i taget. Ett problem jag stötte på var att förstå hur state skulle uppdateras utan att ändra den ursprungliga arrayen. Jag använde AI och React-dokumentationen för att läsa om immutability och fick exempel på hur `map()`, `filter()` och spread-operatorn används vid state-uppdateringar. Därefter testade jag lösningarna själv i projektet tills jag förstod hur React uppdaterar gränssnittet när state förändras.

---
