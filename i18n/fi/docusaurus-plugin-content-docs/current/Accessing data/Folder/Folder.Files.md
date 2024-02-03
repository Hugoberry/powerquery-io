---
title: Folder.Files
---

# Folder.Files


## Description

Palauttaa taulukon, joka sisältää määritetystä kansiosta ja määritetyistä alikansioista löytyneiden tiedostojen ominaisuudet sekä sisällöt.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

Palauttaa taulukon, joka sisältää rivin kullekin kansiopolusta <code>path</code> löytyvälle tiedostolle ja kaikille sen alikansiolle. Kukin rivi sisältää kansion tai tiedoston ominaisuudet ja linkin sen sisältöön. <code>options</code>-parametri on tällä hetkellä tarkoitettu vain sisäiseen käyttöön.



## Category
Accessing data
