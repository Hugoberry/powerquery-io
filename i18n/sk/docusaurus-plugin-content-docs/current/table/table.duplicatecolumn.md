---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Duplikuje stĺpec so zadaným názvom. Hodnoty a typ sa skopírujú zo zdrojového stĺpca.


## Syntax

```powerquery
Table.DuplicateColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional columnType as type
) as table
```


## Remarks

Duplikujte stĺpec s názvom `columnName` do tabuľky `table`. Hodnoty a typ stĺpca `newColumnName` sa skopírujú zo stĺpca `columnName`.


## Examples

### Example #1
Stĺpec „a“ sa duplikuje do stĺpca s názvom „skopírovaný stĺpec“ v tabuľke `({[a = 1, b = 2], [a = 3, b = 4]})`.
```powerquery
Table.DuplicateColumn(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    "a",
    "copied column"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, #"copied column" = 1],
    [a = 3, b = 4, #"copied column" = 3]
})
```




## Category
Table.Column operations
