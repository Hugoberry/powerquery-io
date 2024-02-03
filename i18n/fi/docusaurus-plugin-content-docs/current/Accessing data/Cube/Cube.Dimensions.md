---
title: Cube.Dimensions
---

# Cube.Dimensions


## Description

Palauttaa taulukon, joka sisältää käytettävissä olevien dimensioiden joukon.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Details

Palauttaa taulukon, joka sisältää kohteessa <code>cube</code> käytettävissä olevien dimensioiden joukon. Kukin dimensio on taulukko, joka sisältää dimensiomääritteiden joukon, ja kukin dimensiomäärite on esitetty dimensiotaulukon sarakkeena. Dimensiot voi laajentaa kuutiossa käyttämällä menetelmää Cube.AddAndExpandDimensionColumn. 



## Category
Cube
