---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Sustituye todas las filas especificadas con las filas proporcionadas.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Sustituye todas las filas especificadas en <code>table</code> con las proporcionadas. Las filas que se sustituyen y los reemplazos se especifican en <code>replacements</code> con el formato \{old, new}.    Se puede especificar un parámetro <code>equationCriteria</code> opcional para controlar la comparación entre las filas de la tabla.


## Examples

### Example #1 
Reemplazar las filas [a = 1, b = 2] y [a = 2, b = 3] con [a = -1, b = -2],[a = -2, b = -3] en la tabla.
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
