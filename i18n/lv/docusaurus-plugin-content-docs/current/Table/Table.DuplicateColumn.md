---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

Tiek izveidots kolonnas dublikāts, piešķirot tam norādīto nosaukumu. Vērtības un tips tiek kopēti no avota kolonnas.


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

Dublējiet kolonnu ar nosaukumu <code>columnName</code> tabulā <code>table</code>. Vērtības un tips kolonnai <code>newColumnName</code> tiek kopēti no kolonnas <code>columnName</code>.


## Examples

### Example #1 
Dublicēt kolonnu &#34;a&#34; kolonnā &#34;copied column&#34; tabulā &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
