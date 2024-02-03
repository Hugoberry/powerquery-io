---
title: Table.Split
---

# Table.Split


## Description

Membagi daftar yang ditentukan ke dalam satu daftar tabel menggunakan ukuran halaman yang ditentukan.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

Membagi <code>table</code> ke dalam satu daftar tabel, dengan elemen pertama dari daftar berupa tabel yang berisi baris<code>pageSize</code> pertama dari   tabel sumber, elemen daftar berikutnya adalah tabel yang berisi baris<code>pageSize</code> berikutnya dari tabel sumber, dan seterusnya.


## Examples

### Example #1 
Bagi tabel yang berisi lima catatan ke dalam beberapa tabel dengan masing-masing dua catatan.
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation
