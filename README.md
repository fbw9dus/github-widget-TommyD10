# Github User Projects

Mach eine Seite die die Repositories eins Nutzers anzeigt. Wenn man einen GitHub-Benutzernamen ins Suchfeld eingibt, wird die [Github-API](https://developer.github.com/v3/) abgefragt und unten eine Liste der Projekte dieses Nutzers angezeigt.

- Die API-URL für Repositories eines Nutzers ist `https://api.github.com/users/:username/repos`
- Für meinen Benutzernamen wäre die URL also `https://api.github.com/users/galymax/repos`

## Anforderungen
- Für dieses Projekt muss webpack nicht benutzt werden
- Schreib für diese App eine Class
- Der Constructor der Class soll parameter haben, z.B. für den Selektor des Elements, in dem die Ergebnisse angezegt werden.
- Nutze `fetch` und `async`/`await`-Syntax
- Achte auf eine saubere Ordnerstruktur

  
  ![preview](./demo.gif)






 
