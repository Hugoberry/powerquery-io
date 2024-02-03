---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


## Description

Menghasilkan tabel dengan baris hitungan pertama dilewati.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Mengembalikan tabel yang tidak berisi jumlah baris yang ditetapkan pertama, <code>countOrCondition</code>, pada tabel <code>table</code>.    Jumlah baris yang dihapus akan tergantung pada parameter opsional <code>countOrCondition</code>.    <ul>    <li> Jika <code>countOrCondition</code> dihilangkan, hanya baris pertama yang dihapus. </li>    <li> Jika <code>countOrCondition</code> adalah angka, baris sebanyak itu (dimulai dari atas) akan dihapus. </li>    <li> Jika <code>countOrCondition</code> adalah kondisi, baris yang memenuhi kondisi tersebut akan dihapus hingga baris yang tidak memenuhi kondisi ditemukan.</li>    </ul>


## Examples

### Example #1 
Menghapus baris pertama dalam tabel.
```powerquery
Table.RemoveFirstN(
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
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
Menghapus dua baris pertama dalam tabel.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3 
Menghapus baris pertama dengan [CustomerID] &lt;= 2 dari tabel.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] <= 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
