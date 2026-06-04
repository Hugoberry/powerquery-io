---
title: Record.FromTable
---

# Record.FromTable


Membuat data dari tabel formulir \{\[Name = name, Value = value\]\}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Menghasilkan data dari tabel data `table` yang berisi nama bidang dan nama nilai `{[Name = name, Value = value]}`. Kesalahan akan muncul jika nama bidang tidak unik.


## Examples

### Example #1
Membuat data dari tabel dengan bentuk Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\}).
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
