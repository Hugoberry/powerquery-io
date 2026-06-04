---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Másolatot készít egy oszlopról a megadott névvel. Az értékeket és a típusokat a forrásoszlopból másolja át.


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

A(z) `columnName` nevű oszlopot másolja a(z) `table` táblába. A(z) `newColumnName` oszlop értékeit és típusát a(z) `columnName` oszlopból másolja át.


## Examples

### Example #1
Az „a” nevű oszlop átmásolása a „másolt oszlop” nevű oszlopba a `({[a = 1, b = 2], [a = 3, b = 4]})` táblában.
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
