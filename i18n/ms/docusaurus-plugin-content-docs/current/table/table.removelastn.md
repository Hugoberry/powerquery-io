---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Mengembalikan jadual dengan N baris terakhir telah dialih keluar.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Mengembalikan jadual yang tidak mengandungi `countOrCondition` baris terakhir pada jadual `table`. Bilangan baris yang dialih keluar bergantung pada parameter pilihan `countOrCondition`.

-   Jika `countOrCondition` dikecualikan hanya baris terakhir dialih keluar.
-   Jika `countOrCondition` ialah nombor, baris sebanyak itu (bermula di bawah) akan dialih keluar.
-   Jika `countOrCondition` ialah syarat, baris yang memenuhi syarat akan dialih keluar sehingga baris tidak memenuhi syarat.


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
Alih keluarkan baris terakhir yang mana \[CustomerID\] > 2 pada jadual.
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
