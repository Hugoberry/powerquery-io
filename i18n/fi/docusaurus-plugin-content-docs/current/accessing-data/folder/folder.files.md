---
title: Folder.Files
---

# Folder.Files


Palauttaa taulukon, joka sisältää määritetystä kansiosta ja määritetyistä alikansioista löytyneiden tiedostojen ominaisuudet sekä sisällöt.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Palauttaa taulukon, joka sisältää rivin jokaiselle määritetystä kansiosta ja sen alikansioista löytyneelle tiedostolle.

-   `path`: Polku kansioon, josta haluat noutaa tiedostot. Annetun kansiopolun on oltava kelvollinen absoluuttinen polku.
-   `options`: (Valinnainen) Tämä parametri on tällä hetkellä tarkoitettu vain sisäiseen käyttöön.

Jokainen palautetun taulukon rivi sisältää tiedoston ominaisuudet ja linkin sen sisältöön.


## Examples

### Example #1
Palauta taulukko, joka sisältää kaikki C:\\test-examples\\example-folder -kansiosta ja sen alikansioista löytyneet tiedostot.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
