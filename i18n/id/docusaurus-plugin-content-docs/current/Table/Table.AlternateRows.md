---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

Mempertahankan offset awal, lalu bergantian mengambil dan melewatkan baris berikut.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Details

Mempertahankan offset awal, lalu bergantian mengambil dan melewatkan baris berikut.    <ul>       <li><code>table</code>: Tabel input.</li>       <li><code>offset</code>: Jumlah baris yang akan dipertahankan sebelum memulai iterasi.</li>       <li><code>skip</code>: Jumlah baris yang akan dihapus dalam setiap iterasi.</li>       <li><code>take</code>: Jumlah baris yang akan dipertahankan dalam setiap iterasi.</li>    </ul>    


## Examples

### Example #1 
Menghasilkan tabel dari tabel yang, dimulai dari baris pertama, melewati 1 nilai lalu mempertahankan 1 nilai.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
