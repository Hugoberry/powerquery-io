---
title: Folder.Contents
---

# Folder.Contents


Palauttaa taulukon, joka sisältää määritetystä kansiosta löytyneiden tiedostojen ja kansioiden ominaisuudet sekä sisällöt.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Remarks

Palauttaa taulukon, joka sisältää rivin kullekin kansiopolusta `path` löytyvälle kansiolle ja tiedostolle. Kukin rivi sisältää kansion tai tiedoston ominaisuudet ja linkin sen sisältöön. `options`\-parametri on tällä hetkellä tarkoitettu vain sisäiseen käyttöön.



## Category
Accessing data
