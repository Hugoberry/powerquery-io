---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

Повторяет столбец с указанным именем. Значения и тип копируются из исходного столбца.


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

Повторять столбец с именем <code>columnName</code> в таблице <code>table</code>. Значения и тип данных для столбца <code>newColumnName</code> копируются из столбца <code>columnName</code>.


## Examples

### Example #1 
Повторять столбец &#34;a&#34; в столбец с именем &#34;copied column&#34; в таблице &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
