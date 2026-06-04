---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Monistaa sarakkeen, jolla on määritetty nimi. Arvot ja tyyppi kopioidaan lähdesarakkeesta.


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

Monista sarake `columnName` taulukkoon `table`. Sarakkeen `newColumnName` arvot ja tyyppi kopioidaan sarakkeesta `columnName`.


## Examples

### Example #1
Monista sarake "a" sarakkeeksi nimeltä "copied column" taulukossa `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
