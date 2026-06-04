---
title: Table.FirstN
---

# Table.FirstN


Mengembalikan baris kiraan pertama yang ditentukan.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Remarks

Mengembalikan baris pertama jadual `table`, bergantung pada nilai `countOrCondition`:

-   Jika `countOrCondition` ialah nombor, baris sebanyak itu (bermula di atas) akan dikembalikan.
-   Jika `countOrCondition` ialah syarat, baris yang memenuhi syarat akan dikembalikan sehingga baris tidak memenuhi syarat.


## Examples

### Example #1
Cari dua baris pertama jadual .
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
Cari dua baris pertama yang mana \[a\] > 0 dalam jadual.
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
