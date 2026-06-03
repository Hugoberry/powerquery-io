---
title: Table.Unpivot
---

# Table.Unpivot


Wandelt eine Spaltengruppe in einer Tabelle in Attribut-Wert-Paare um.


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

Wandelt eine Spaltengruppe in einer Tabelle in Attribut-Wert-Paare um – kombiniert mit den restlichen Werten in den einzelnen Zeilen.


## Examples

### Example #1
Entpivotiert die Spalten "a", "b" und "c" in der Tabelle `({[ key = "x", a = 1, b = null, c = 3 ], [ key = "y", a = 2, b = 4, c = null ]})` zu Attribut-Wert-Paaren.
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
