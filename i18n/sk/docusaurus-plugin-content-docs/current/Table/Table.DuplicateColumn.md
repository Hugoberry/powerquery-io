---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

Duplikuje stĺpec so zadaným názvom. Hodnoty a typ sa skopírujú zo zdrojového stĺpca.


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

Duplikujte stĺpec s názvom <code>columnName</code> do tabuľky <code>table</code>. Hodnoty a typ pre stĺpec <code>newColumnName</code> sa skopírujú zo stĺpca <code>columnName</code>.


## Examples

### Example #1 
Stĺpec „a“ sa duplikuje do stĺpca s názvom „skopírovaný stĺpec“ v tabuľke &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
