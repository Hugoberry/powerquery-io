---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

Duplica una columna amb el nom especificat. Els valors i el tipus es copien de la columna d&#39;origen.


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

Duplica la columna amb el nom <code>columnName</code> a la taula <code>table</code>. Els valors i el tipus de la columna <code>newColumnName</code> es copien de la columna <code>columnName</code>.


## Examples

### Example #1 
Duplica la columna &#34;a&#34; en una columna anomenada &#34;copied column&#34; de la taula &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
