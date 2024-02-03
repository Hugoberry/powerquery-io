---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

Belirtilen ada sahip bir sütunu çoğaltır. Değerler ve tür kaynak sütundan kopyalanır.


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

<code>columnName</code> adlı bir sütunu <code>table</code> tablosuna çoğaltır. <code>newColumnName</code> sütununa ait değerler ve tür <code>columnName</code> sütunundan kopyalanır.


## Examples

### Example #1 
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; tablosundaki &#34;a&#34; sütununu &#34;kopya sütun&#34; adlı sütuna çoğalt.
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
