---
title: Cube.CollapseAndRemoveColumns
---

# Cube.CollapseAndRemoveColumns


Ændrer filterkontekstens dimensionelle granularitet for kuben ved at skjule de attributter, der er knyttet til de angivne kolonner.


## Syntax

```powerquery
Cube.CollapseAndRemoveColumns(
    cube as table,
    columnNames as list
) as table
```


## Remarks

Ændrer filterkontekstens dimensionelle granularitet for `cube` ved at skjule de attributter, der er knyttet til de angivne kolonner `columnNames`. Kolonnerne fjernes også fra kubens tabelvisning.



## Category
Cube
