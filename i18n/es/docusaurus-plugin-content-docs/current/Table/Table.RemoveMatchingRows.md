---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Quita todas las coincidencias de las filas especificadas de la tabla.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Quita todas las repeticiones de las <code>rows</code> especificadas de la <code>table</code>.    Se puede especificar un parámetro <code>equationCriteria</code> opcional para controlar la comparación entre las filas de la tabla.


## Examples

### Example #1 
Quitar las filas en las que [a = 1] de la tabla &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```




## Category
Table.Membership
