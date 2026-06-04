---
title: Table.LastN
---

# Table.LastN


Mengembalikan bilangan baris yang ditentukan terakhir.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Mengembalikan baris terakhir daripada jadual, `table` bergantung pada nilai `countOrCondition`:

-   Jika `countOrCondition` ialah nombor, baris sebanyak akan dikembalikan bermula dari kedudukan (tamat - `countOrCondition`).
-   Jika `countOrCondition` ialah syarat, baris yang memenuhi syarat akan dikembalikan dalam kedudukan menaik sehingga baris tidak memenuhi syarat.


## Examples

### Example #1
Cari dua baris terakhir pada jadual.
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
Cari dua baris terakhir yang mana \[a\] > 0 dalam jadual.
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
