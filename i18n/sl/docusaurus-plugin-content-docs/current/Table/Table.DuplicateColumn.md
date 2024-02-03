---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

Podvoji stolpec z navedenim imenom. Vrsta in vrednosti so kopirane iz izvornega stolpca.


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

Podvojite stolpec z imenom <code>columnName</code> v tabelo <code>table</code>. Vrsta in vrednosti za stolpec <code>newColumnName</code> so kopirane iz stolpca <code>columnName</code>.


## Examples

### Example #1 
Podvojite stolpec &#34;a&#34; v stolpec z imenom &#34;copied column&#34; v tabeli &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
