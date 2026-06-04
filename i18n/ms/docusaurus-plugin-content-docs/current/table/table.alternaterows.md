---
title: Table.AlternateRows
---

# Table.AlternateRows


Menyimpan ofset asal kemudian melakukan pengambilan dan langkauan baris berikutnya secara selang seli.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Remarks

Menyimpan ofset asal kemudian melakukan pengambilan dan langkauan baris berikutnya secara selang seli.

-   `table`: Jadual input.
-   `offset`: Bilangan baris untuk dikekalkan sebelum memulakan lelaran.
-   `skip`: Bilangan baris untuk dialih keluar dalam setiap lelaran.
-   `take`: Bilangan baris untuk dikekalkan dalam setiap lelaran.


## Examples

### Example #1
Mengembalikan jadual daripada jadual yang bermula pada baris pertama, melangkau 1 nilai dan kemudian mengekalkan 1 nilai.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
