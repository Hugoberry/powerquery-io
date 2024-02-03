---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

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


## Details

Duplikuje sloupec <code>columnName</code> do tabulky <code>table</code>. Hodnoty a typ sloupce <code>newColumnName</code> jsou zkopírovány ze sloupce <code>columnName</code>.


## Examples

### Example #1 
Duplikuje sloupec „a“ do sloupce „zkopírovaný sloupec“ v tabulce &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
