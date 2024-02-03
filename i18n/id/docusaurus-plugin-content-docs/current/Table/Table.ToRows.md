---
title: Table.ToRows
---

# Table.ToRows


## Description

Membuat daftar berisi daftar bersarang untuk nilai baris dari tabel.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Membuat daftar berisi daftar bersarang dari tabel, <code>table</code>.  Setiap item daftar adalah daftar dalam yang berisi nilai baris.


## Examples

### Example #1 
Membuat daftar nilai baris dari tabel.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
