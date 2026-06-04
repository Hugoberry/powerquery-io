---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Îmbină tabelul de dimensiuni specificat în contextul filtru al cubului și modifică granularitatea dimensională a contextului filtru prin extinderea setului specificat de atribute de dimensiune.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Remarks

Îmbină tabelul de dimensiuni specificat, `dimensionSelector`, în contextul filtru al `cube` și modifică granularitatea dimensională prin extinderea setului specificat, `attributeNames`, de atribute de dimensiune. Atributele de dimensiune sunt adăugate la vizualizarea tabelară cu coloanele denumite `newColumnNames` sau `attributeNames` daca nu se specifică.



## Category
Cube
