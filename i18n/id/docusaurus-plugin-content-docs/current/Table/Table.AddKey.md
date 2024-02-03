---
title: Table.AddKey
---

# Table.AddKey


## Description

Menambahkan kunci ke tabel.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

Menambahkan kunci ke <code>table</code>, dengan <code>columns</code> adalah daftar nama kolom yang menentukan kunci, dan <code>isPrimary</code> menetapkan apakah kunci tersebut adalah utama.


## Examples

### Example #1 
Menambahkan kunci utama kolom tunggal ke tabel.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    resultTable = Table.AddKey(table, {"Id"}, true)
in
    resultTable
```

Result: 
```powerquery
Table.FromRecords({
    [Id = 1, Name = "Hello There"],
    [Id = 2, Name = "Good Bye"]
})
```




## Category
Table.Transformation
