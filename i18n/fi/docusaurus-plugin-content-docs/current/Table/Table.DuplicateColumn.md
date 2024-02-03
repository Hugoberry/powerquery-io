---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

Monistaa sarakkeen, jolla on määritetty nimi. Arvot ja tyyppi kopioidaan lähdesarakkeesta.


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

Monista sarake <code>columnName</code> taulukkoon <code>table</code>. Sarakkeen <code>newColumnName</code> arvot ja tyyppi kopioidaan sarakkeesta <code>columnName</code>.


## Examples

### Example #1 
Monista sarake &#34;a&#34; sarakkeeksi nimeltä &#34;copied column&#34; taulukossa &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
