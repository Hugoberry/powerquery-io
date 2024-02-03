---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

Memperduakan lajur dengan nama ditetapkan. Nilai dan jenis disalin daripada lajur sumber.


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

Memperduakan lajur bernama <code>columnName</code> pada jadual <code>table</code>. Nilai dan taip untuk lajur <code>newColumnName</code> disalin daripada lajur <code>columnName</code>.


## Examples

### Example #1 
Perduakan lajur &#34;a&#34; kepada lajur bernama &#34;copied column&#34; dalam jadual &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
