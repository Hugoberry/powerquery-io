---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

Dublerer en kolonne med det angivne navn. Værdier og type kopieres fra kildekolonnen.


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

Dubler kolonnen med navnet <code>columnName</code> til tabellen <code>table</code>. Værdierne og typen for kolonnen <code>newColumnName</code> kopieres fra kolonnen <code>columnName</code>.


## Examples

### Example #1 
Dubler kolonnen &#34;a&#34; til en kolonne med navnet &#34;copied column&#34; i tabellen &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
