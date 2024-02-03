---
title: Table.LastN
---

# Table.LastN


## Description

Menghasilkan jumlah baris yang ditetapkan terakhir.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Menghasilkan baris terakhir dari tabel, <code>table</code>, tergantung pada nilai <code>countOrCondition</code>:    <ul>    <li> Jika <code>countOrCondition</code> adalah angka, baris sebanyak itu akan dihasilkan dimulai dari posisi (akhir - <code>countOrCondition</code>). </li>    <li> Jika <code>countOrCondition</code> adalah ketentuan, baris yang sesuai dengan ketentuan tersebut akan dihasilkan pada posisi naik hingga baris yang tidak sesuai dengan ketentuan.</li></ul>


## Examples

### Example #1 
Mencari dua baris terakhir dalam tabel.
```powerquery
Table.LastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Mencari baris terakhir dengan [a] &gt; 0 dalam tabel.
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
