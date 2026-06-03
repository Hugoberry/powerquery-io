---
title: Cube.CollapseAndRemoveColumns
---

# Cube.CollapseAndRemoveColumns


Ändrar dimensionsgranulariteten för kubens filterkontext genom att komprimera attributen som är mappade till de angivna kolumnerna.


## Syntax

```powerquery
Cube.CollapseAndRemoveColumns(
    cube as table,
    columnNames as list
) as table
```


## Remarks

Ändrar dimensionsgranulariteten för filterkontexten för `cube` genom att komprimera attributen som är mappade till de angivna kolumnerna (`columnNames`). Kolumnerna tas även bort från kubens tabellvy.



## Category
Cube
