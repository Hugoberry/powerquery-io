---
title: Table.Repeat
---

# Table.Repeat


## Description

Mengulang baris tabel dengan frekuensi tertentu.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

Menghasilkan tabel dengan baris dari input <code>table</code> yang diulang <code>count</code> kali sebagaimana ditetapkan.


## Examples

### Example #1 
Mengulang baris dalam tabel dua kali.
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
