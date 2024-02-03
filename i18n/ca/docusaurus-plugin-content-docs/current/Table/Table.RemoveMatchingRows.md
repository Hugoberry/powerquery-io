---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Suprimeix totes les aparicions de les files especificades de la taula.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Suprimeix totes les repeticions de les <code>rows</code> files especificades de la <code>table</code>.    Es pot especificar un paràmetre opcional, <code>equationCriteria</code>, per controlar la comparació entre les files de la taula.


## Examples

### Example #1 
Suprimeix qualsevol fila on [a = 1] de la taula &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
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
