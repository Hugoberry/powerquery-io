---
title: Table.Repeat
---

# Table.Repeat


## Description

Repetă rândurile din tabele de un număr specificat de ori.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Returnează un tabel cu rândurile din datele introduse <code>table</code> repetate de <code>count</code> de ori.


## Examples

### Example #1 
Repetați de două ori rândurile din tabel.
```powerquery
Table.Repeat(
    Table.FromRecords({
        [a = 1, b = "hello"],
        [a = 3, b = "world"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = "hello"],
    [a = 3, b = "world"],
    [a = 1, b = "hello"],
    [a = 3, b = "world"]
})
```




## Category
Table.Row operations
