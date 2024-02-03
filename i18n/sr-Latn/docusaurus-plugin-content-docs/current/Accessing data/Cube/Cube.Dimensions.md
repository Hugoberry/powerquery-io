---
title: Cube.Dimensions
---

# Cube.Dimensions


## Description

Vraća tabelu koja sadrži skup dostupnih dimenzija.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Details

Vraća tabelu koja sadrži skup dostupnih dimenzija u okviru <code>cube</code>. Svaka dimenzija je tabela sa skupom atributa dimenzije i svaki atribut dimenzije je predstavljen kao kolona u tabeli dimenzija. Dimenzije možete da proširite koristeći Cube.AddAndExpandDimensionColumn. 



## Category
Cube
