---
title: Table.AddKey
---

# Table.AddKey


Menambah kunci pada jadual.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Tambah kunci pada `table`, apabila `columns` ialah senarai nama lajur yang mentakrifkan kunci, dan `isPrimary` menentukan sama ada kunci adalah primer.


## Examples

### Example #1
Tambah kunci utama lajur tunggal pada jadual.
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
