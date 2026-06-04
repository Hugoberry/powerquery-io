---
title: Table.Unpivot
---

# Table.Unpivot


Kääntää taulukon sarakejoukon määrite–arvo-pareiksi.


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

Kääntää taulukon sarakejoukon määrite–arvo-pareiksi yhdistettynä kunkin rivin muiden arvojen kanssa.


## Examples

### Example #1
Ota sarakkeet "a", "b" ja "c" taulukossa `({[ key = "x", a = 1, b = null, c = 3 ], [ key = "y", a = 2, b = 4, c = null ]})` ja poista niiden pivotointi, jotta niistä tulee määrite–arvo-pareja.
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
