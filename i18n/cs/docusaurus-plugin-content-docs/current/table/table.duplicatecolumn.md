---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Duplikuje sloupec se zadaným názvem. Hodnoty a typ jsou kopírovány ze zdrojového sloupce.


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

Duplikuje sloupec `columnName` do tabulky `table`. Hodnoty a typ sloupce `newColumnName` jsou zkopírovány ze sloupce `columnName`.


## Examples

### Example #1
Duplikuje sloupec „a“ do sloupce „zkopírovaný sloupec“ v tabulce `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
