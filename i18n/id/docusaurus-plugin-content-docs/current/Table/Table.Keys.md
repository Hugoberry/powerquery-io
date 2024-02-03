---
title: Table.Keys
---

# Table.Keys


## Description

Menghasilkan kunci tabel yang telah ditentukan.


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Details

Menghasilkan kunci tabel yang telah ditentukan.


## Examples

### Example #1 
Dapatkan daftar kunci untuk tabel.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    tableWithKeys = Table.AddKey(table, {"Id"}, true),
    keys = Table.Keys(tableWithKeys)
in
    keys
```

Result: 
```powerquery
{[Columns = {"Id"}, Primary = true]}
```




## Category
Table.Transformation
