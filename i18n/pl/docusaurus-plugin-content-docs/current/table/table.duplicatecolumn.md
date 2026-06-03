---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Duplikuje kolumnę o określonej nazwie. Wartości i typ są kopiowane z kolumny źródłowej.


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

Zduplikuj kolumnę o nazwie `columnName` do tabeli `table`. Wartości i typ kolumny `newColumnName` są kopiowane z kolumny `columnName`.


## Examples

### Example #1
Zduplikuj kolumnę „a” do kolumny o nazwie „skopiowana kolumna” w tabeli `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
