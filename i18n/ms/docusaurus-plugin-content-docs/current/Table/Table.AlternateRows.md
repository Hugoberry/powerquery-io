---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

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


## Details

Menyimpan ofset asal kemudian melakukan pengambilan dan langkauan baris berikutnya secara selang seli.    <ul>       <li><code>table</code>: Jadual input.</li>       <li><code>offset</code>: Bilangan baris untuk dikekalkan sebelum memulakan lelaran.</li>       <li><code>skip</code>: Bilangan baris untuk dialih keluar dalam setiap lelaran.</li>       <li><code>take</code>: Bilangan baris untuk dikekalkan dalam setiap lelaran.</li>    </ul>    


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
