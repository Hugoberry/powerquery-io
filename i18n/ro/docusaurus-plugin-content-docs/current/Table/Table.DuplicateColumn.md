---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


## Description

Dublează o coloană cu numele specificat. Valorile şi tipul sunt copiate din coloana sursă.


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

Dublaţi coloana cu numele <code>columnName</code> la tabelul <code>table</code>. Valorile şi tipul pentru coloana <code>newColumnName</code> sunt copiate din coloana <code>columnName</code>.


## Examples

### Example #1 
Dublaţi coloana „a” la o coloană cu numele „copied column” în tabelul &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
