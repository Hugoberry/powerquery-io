---
title: Table.FirstN
---

# Table.FirstN


## Description

Menghasilkan baris hitungan pertama yang ditetapkan.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Menghasilkan baris pertama tabel <code>table</code>, tergantung pada nilai <code>countOrCondition</code>:    <ul>    <li> Jika <code>countOrCondition</code> adalah angka, baris sebanyak itu (dimulai dari atas) akan dihasilkan. </li>    <li> Jika <code>countOrCondition</code> adalah ketentuan, baris yang sesuai dengan ketentuan tersebut akan dihasilkan hingga baris yang tidak sesuai dengan ketentuan.</li></ul>


## Examples

### Example #1 
Mencari dua baris pertama dalam tabel.
```powerquery
Table.FirstN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Mencari baris pertama dengan [a] &gt; 0 dalam tabel.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
