---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Elimina todas as ocorrencias das filas especificadas da táboa.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Elimina todas as ocorrencias das <code>rows</code> especificadas da <code>table</code>.    Pódese especificar un parámetro opcional <code>equationCriteria</code> para controlar a comparación entre as filas da táboa.


## Examples

### Example #1 
Eliminar as filas onde [a = 1] da táboa &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
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
