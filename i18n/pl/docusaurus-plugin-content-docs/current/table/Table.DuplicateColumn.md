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

Zduplikuj kolumnę o nazwie <code>columnName</code> do tabeli <code>table</code>. Wartości i typ kolumny <code>newColumnName</code> są kopiowane z kolumny <code>columnName</code>.


## Examples

### Example #1 
Zduplikuj kolumnę „a” do kolumny o nazwie „skopiowana kolumna” w tabeli &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
