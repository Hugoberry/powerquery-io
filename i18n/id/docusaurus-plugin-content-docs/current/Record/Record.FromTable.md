---
title: Record.FromTable
---

# Record.FromTable


## Description

Membuat data dari tabel formulir \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Menghasilkan data dari tabel data <code>table</code> yang berisi nama bidang dan nama nilai <code>\{[Name = name, Value = value]}</code>. Pengecualian akan dibuat jika nama bidang tidak unik.


## Examples

### Example #1 
Membuat data dari tabel dengan bentuk Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
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
