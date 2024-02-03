---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

Menghapus kolom dengan nama yang ditetapkan. Nilai dan tipe akan disalin dari kolom sumber.


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

Menduplikasikan kolom bernama <code>columnName</code> ke tabel <code>table</code>. Nilai dan tipe untuk kolom <code>newColumnName</code> akan disalin dari kolom <code>columnName</code>.


## Examples

### Example #1 
Menduplikasikan kolom &#34;a&#34; ke kolom &#34;copied column&#34; dalam tabel &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
