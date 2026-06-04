---
title: Table.ToColumns
---

# Table.ToColumns


Membuat daftar berisi daftar bersarang untuk nilai kolom dari tabel.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Remarks

Membuat daftar berisi daftar bersarang dari tabel, `table`. Setiap item daftar adalah daftar dalam yang berisi nilai kolom.


## Examples

### Example #1
Membuat daftar nilai kolom dari tabel.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
