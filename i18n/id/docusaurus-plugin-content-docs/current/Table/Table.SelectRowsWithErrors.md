---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Menghasilkan tabel hanya dengan baris dari tabel input yang berisi kesalahan di minimal salah satu selnya. Jika daftar kolom ditetapkan, maka hanya sel di kolom tertentu yang akan diperiksa apakah ada kesalahan.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Menghasilkan tabel hanya dengan baris dari tabel input yang berisi kesalahan di minimal salah satu selnya. Jika daftar kolom ditetapkan, maka hanya sel di kolom tertentu yang akan diperiksa apakah ada kesalahan.


## Examples

### Example #1 
Pilih nama pelanggan dengan kesalahan dalam barisnya.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
