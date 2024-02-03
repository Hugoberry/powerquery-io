---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Substitúe todas as filas especificadas coa(s) fila(s) fornecida(s).


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Substitúe todas as filas especificadas en <code>table</code> coas fornecidas. As filas que se van substituír e as substitucións especifícanse en <code>replacements</code>, usando o formato \{old, new}.    Pódese especificar un parámetro opcional <code>equationCriteria</code> para controlar a comparación entre as filas da táboa.


## Examples

### Example #1 
Substituír as filas [a = 1, b = 2] e [a = 2, b = 3] por [a = -1, b = -2],[a = -2, b = -3] na táboa.
```powerquery
Table.ReplaceMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 2, b = 3],
        [a = 3, b = 4],
        [a = 1, b = 2]
    }),
    {
        {[a = 1, b = 2], [a = -1, b = -2]},
        {[a = 2, b = 3], [a = -2, b = -3]}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = -1, b = -2],
    [a = -2, b = -3],
    [a = 3, b = 4],
    [a = -1, b = -2]
})
```




## Category
Table.Membership
