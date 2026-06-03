---
title: Cube.CollapseAndRemoveColumns
---

# Cube.CollapseAndRemoveColumns


Ändert die Dimensionsgranularität des Filterkontexts für den Cube, indem die Ansicht der Attribute, die den angegebenen Spalten zugeordnet sind, reduziert wird.


## Syntax

```powerquery
Cube.CollapseAndRemoveColumns(
    cube as table,
    columnNames as list
) as table
```


## Remarks

Ändert die Dimensionsgranularität des Filterkontexts für den Cube '`cube`', indem die Ansicht der Attribute, die den angegebenen `columnNames`\-Spalten zugeordnet sind, reduziert wird. Die Spalten werden auch aus der tabellarischen Sicht des Cubes entfernt.



## Category
Cube
