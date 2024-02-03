---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

Menghasilkan tabel dengan baris N terakhir dihapus.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Mengembalikan tabel yang tidak berisi baris <code>countOrCondition</code> terakhir pada tabel <code>table</code>.        Jumlah baris yang dihapus akan tergantung pada parameter opsional <code>countOrCondition</code>.    <ul>    <li> Jika <code>countOrCondition</code> dihilangkan, hanya baris terakhir yang dihapus. </li>    <li> Jika <code>countOrCondition</code> adalah angka, baris sebanyak itu (dimulai dari bawah) akan dihapus. </li>    <li> Jika <code>countOrCondition</code> adalah kondisi, baris yang memenuhi kondisi tersebut akan dihapus hingga baris yang tidak memenuhi kondisi ditemukan.</li>    </ul>


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
Menghapus baris terakhir dengan [CustomerID] &gt; 2 dari tabel.
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
