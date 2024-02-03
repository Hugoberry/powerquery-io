---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

Duplica unha columna co nome especificado. Os valores e o tipo cópianse da columna de orixe.


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

Duplicar a columna co nome <code>columnName</code> á táboa <code>table</code>. Os valores e o tipo da columna <code>newColumnName</code> cópianse da columna <code>columnName</code>.


## Examples

### Example #1 
Duplicar a columna &#34;a&#34; á columna co nome &#34;columna copiada&#34; da táboa &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
