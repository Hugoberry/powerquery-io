---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

Dubliuojamas stulpelis nurodytu pavadinimu. Reikšmės ir tipas nukopijuojami iš šaltinio stulpelio.


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

Dubliuokite stulpelį pavadinimu <code>columnName</code> lentelėje <code>table</code>. Stulpelio <code>newColumnName</code> reikšmės ir tipas nukopijuojami iš stulpelio <code>columnName</code>.


## Examples

### Example #1 
Dubliuokite stulpelį „a“ stulpelyje pavadinimu „copied column“ lentelėje &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
