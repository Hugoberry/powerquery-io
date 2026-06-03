---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Dupliceert een kolom met de opgegeven naam. De waarden en het type worden uit de bronkolom gekopieerd.


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

De kolom genaamd `columnName` naar de tabel `table` dupliceren. De waarden en het type worden uit kolom `newColumnName` naar kolom `columnName` gekopieerd.


## Examples

### Example #1
De kolom "a" dupliceren naar een kolom met de naam "gekopieerde kolom" in de tabel `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
