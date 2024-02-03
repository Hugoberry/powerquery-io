---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

Îmbină tabelul de dimensiuni specificat în contextul filtru al cubului şi modifică granularitatea dimensională a contextului filtru prin extinderea setului specificat de atribute de dimensiune.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Details

Îmbină tabelul de dimensiuni specificat, <code>dimensionSelector</code>, în contextul filtru, <code>cube</code>, al cubului şi modifică granularitatea dimensională prin extinderea setului specificat, <code>attributeNames</code>, de atribute de dimensiune. Atributele de dimensiune sunt adăugate la vizualizarea tabelară cu coloanele denumite <code>newColumnNames</code> sau <code>attributeNames</code> daca nu se specifică.



## Category
Cube
