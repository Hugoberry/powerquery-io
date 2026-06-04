---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Dublează o coloană cu numele specificat. Valorile şi tipul sunt copiate din coloana sursă.


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

Dublați coloana cu numele `columnName` la tabelul `table`. Valorile și tipul pentru coloana `newColumnName` sunt copiate din coloana `columnName`.


## Examples

### Example #1
Dublaţi coloana „a” la o coloană cu numele „copied column” în tabelul `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
