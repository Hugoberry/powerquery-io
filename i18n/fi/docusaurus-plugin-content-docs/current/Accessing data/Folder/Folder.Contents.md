---
title: Folder.Contents
---

# Folder.Contents


## Description

Palauttaa taulukon, joka sisältää määritetystä kansiosta löytyneiden tiedostojen ja kansioiden ominaisuudet sekä sisällöt.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

Palauttaa taulukon, joka sisältää rivin kullekin kansiopolusta <code>path</code> löytyvälle kansiolle ja tiedostolle. Kukin rivi sisältää kansion tai tiedoston ominaisuudet ja linkin sen sisältöön. <code>options</code>-parametri on tällä hetkellä tarkoitettu vain sisäiseen käyttöön.



## Category
Accessing data
