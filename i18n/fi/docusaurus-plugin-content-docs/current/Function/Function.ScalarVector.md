---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Luo skalaarifunktion vektorifunktion päälle tehden useista kutsuista erän.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Palauttaa tyypin <code>scalarFunctionType</code> skalaarifunktion, joka kutsuu kohdetta <code>vectorFunction</code> käyttäen yksittäistä riviä argumentteja ja palauttaa sen yksittäisen tulosteen. Lisäksi, kun skalaarifunktiota käytetään toistuvasti jokaiselle riville syötetaulukossa, kuten Table.AddColumn, sen sijaan kohdetta <code>vectorFunction</code> käytetään kerran kaikille syötteille. <br />Kohteelle <code>vectorFunction</code> välitetään taulukko, jonka sarakkeet vastaavat kohteen <code>scalarFunctionType</code> parametrien nimeä ja sijaintia. Tämän taulukon kukin rivi sisältää skalaarifunktion yhden kutsun argumentit niin, että sarakkeet vastaavat kohteen <code>scalarFunctionType</code> parametreja. <br />Kohteen <code>vectorFunction</code> on palautettava luettelo, joka on saman pituinen kuin syötetaulukko, jonka kohteen kussakin sijainnissa on oltava sama tulos kuin skalaarifunktion arvioimisella samassa sijainnissa olevalla syöterivillä. <br />Syötetaulukon odotetaan virtauttettavan sisään, joten kohteen <code>vectorFunction</code> odotetaan virtauttavan tulosteensa syötteen tullessa sisään käsitellen yhtä syötelohkoa kerrallaan. Tarkemmin sanottuna kohde <code>vectorFunction</code> ei saa luetteloida syötetaulukkoaan useammin kuin kerran.<br />



## Category
Function
