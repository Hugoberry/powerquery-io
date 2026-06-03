---
title: Table.Unpivot
---

# Table.Unpivot


Converte un set di colonne di una tabella in coppie attributo-valore.


## Syntax

```powerquery
Table.Unpivot(
    table as table,
    pivotColumns as list,
    attributeColumn as text,
    valueColumn as text
) as table
```


## Remarks

Converte un set di colonne di una tabella in coppie attributo-valore, insieme al resto dei valori di ogni riga.


## Examples

### Example #1
Accettare le colonne "a", "b" e "c" nella tabella `({[ key = "x", a = 1, b = null, c = 3 ], [ key = "y", a = 2, b = 4, c = null ]})` e trasformarle tramite UnPivot in coppie attributo-valore.
```powerquery
Table.Unpivot(
    Table.FromRecords({
        [key = "x", a = 1, b = null, c = 3],
        [key = "y", a = 2, b = 4, c = null]
    }),
    {"a", "b", "c"},
    "attribute",
    "value"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", attribute = "a", value = 1],
    [key = "x", attribute = "c", value = 3],
    [key = "y", attribute = "a", value = 2],
    [key = "y", attribute = "b", value = 4]
})
```




## Category
Table.Column operations
