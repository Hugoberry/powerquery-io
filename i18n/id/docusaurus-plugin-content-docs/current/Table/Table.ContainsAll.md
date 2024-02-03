---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

Menunjukkan apakah semua data yang ditetapkan muncul sebagai baris dalam tabel.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Menunjukkan apakah semua data yang ditetapkan dalam daftar data <code>rows</code> muncul sebagai baris dalam <code>table</code>.    Parameter opsional <code>equationCriteria</code> dapat ditetapkan untuk mengontrol perbandingan di antara baris dalam tabel.


## Examples

### Example #1 
Tentukan apakah tabel berisi semua baris, dan hanya membandingkan kolom [CustomerID].
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    },
    "CustomerID"
)
```

Result: 
```powerquery
true
```


### Example #2 
Menentukan apakah tabel berisi semua baris.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    }
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
