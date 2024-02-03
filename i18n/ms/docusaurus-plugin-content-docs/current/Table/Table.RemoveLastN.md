---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

Mengembalikan jadual dengan N baris terakhir telah dialih keluar.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

Mengembalikan jadual yang tidak mengandungi <code>countOrCondition</code> baris terakhir pada jadual <code>table</code>.        Bilangan baris yang dialih keluar bergantung pada parameter pilihan <code>countOrCondition</code>.     <ul>    <li> Jika <code>countOrCondition</code> dikecualikan hanya baris terakhir dialih keluar. </li>    <li> Jika <code>countOrCondition</code> ialah nombor, baris sebanyak itu (bermula di bawah) akan dialih keluar. </li>    <li> Jika <code>countOrCondition</code> ialah syarat, baris yang memenuhi syarat akan dialih keluar sehingga baris tidak memenuhi syarat.</li>    </ul>


## Examples

### Example #1 
Alih keluarkan baris terakhir jadual.
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
Alih keluarkan baris terakhir yang mana [CustomerID] &gt; 2 pada jadual.
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
