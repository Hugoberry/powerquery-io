---
title: Cube.Dimensions
---

# Cube.Dimensions


Palauttaa taulukon, joka sisältää käytettävissä olevien dimensioiden joukon.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Remarks

Palauttaa taulukon, joka sisältää kohteessa `cube` käytettävissä olevien dimensioiden joukon. Kukin dimensio on taulukko, joka sisältää dimensiomääritteiden joukon, ja kukin dimensiomäärite on esitetty dimensiotaulukon sarakkeena. Dimensiot voi laajentaa kuutiossa käyttämällä menetelmää Cube.AddAndExpandDimensionColumn.



## Category
Cube
