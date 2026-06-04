---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Menggantikan julat baris yang ditentukan dengan baris yang diberi.


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

Menggantikan bilangan baris yang ditentukan, `count`, dalam input `table` dengan `rows` yang ditentukan, bermula selepas `offset`. Parameter `rows` ialah senarai rekod.

-   `table`: Jadual yang mana penggantian dilakukan.
-   `offset`: Bilangan baris untuk dilangkau sebelum membuat penggantian.
-   `count`: Bilangan baris untuk digantikan.
-   `rows`: Senarai rekod baris untuk dimasukkan ke dalam `table` di lokasi yang ditentukan oleh `offset`.


## Examples

### Example #1
Bermula di kedudukan 1, ganti 3 baris.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
