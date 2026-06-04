---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Menghasilkan tabel dengan baris N terakhir dihapus.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Mengembalikan tabel yang tidak berisi baris `countOrCondition` terakhir pada tabel `table`. Jumlah baris yang dihapus akan tergantung pada parameter opsional `countOrCondition`.

-   Jika `countOrCondition` dihilangkan, hanya baris terakhir yang dihapus.
-   Jika `countOrCondition` adalah angka, baris sebanyak itu (dimulai dari bawah) akan dihapus.
-   Jika `countOrCondition` adalah kondisi, baris yang memenuhi kondisi tersebut akan dihapus hingga baris yang tidak memenuhi kondisi ditemukan.


## Examples

### Example #1
Menghapus baris terakhir dalam tabel.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
Menghapus baris terakhir dengan \[CustomerID\] > 2 dari tabel.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
