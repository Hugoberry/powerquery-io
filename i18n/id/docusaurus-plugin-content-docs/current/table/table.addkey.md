---
title: Table.AddKey
---

# Table.AddKey


Menambahkan kunci ke tabel.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Menambahkan kunci ke `table`, dengan `columns` adalah daftar nama kolom yang menentukan kunci, dan `isPrimary` menetapkan apakah kunci tersebut adalah utama.


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
