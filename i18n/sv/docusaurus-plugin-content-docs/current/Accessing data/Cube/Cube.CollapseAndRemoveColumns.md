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

Ändrar dimensionsgranulariteten för filterkontexten för <code>cube</code> genom att komprimera attributen som är mappade till de angivna kolumnerna (<code>columnNames</code>). Kolumnerna tas även bort från kubens tabellvy.



## Category
Cube
