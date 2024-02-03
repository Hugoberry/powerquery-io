---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

Duplica una columna con el nombre especificado. Los valores y el tipo se copian de la columna de origen.


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

Duplicar la columna denominada <code>columnName</code> en la tabla <code>table</code>. Los valores y el tipo de la columna <code>newColumnName</code> se copian de la columna <code>columnName</code>.


## Examples

### Example #1 
Duplica la columna &#34;a&#34; en una columna denominada &#34;columna copiada&#34; en la tabla &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
