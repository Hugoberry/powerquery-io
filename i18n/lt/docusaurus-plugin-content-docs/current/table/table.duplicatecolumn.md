---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Dubliuojamas stulpelis nurodytu pavadinimu. Reikšmės ir tipas nukopijuojami iš šaltinio stulpelio.


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

Dubliuokite stulpelį pavadinimu `columnName` lentelėje `table`. Stulpelio `newColumnName` reikšmės ir tipas nukopijuojami iš stulpelio `columnName`.


## Examples

### Example #1
Dubliuokite stulpelį „a“ stulpelyje pavadinimu „copied column“ lentelėje `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
