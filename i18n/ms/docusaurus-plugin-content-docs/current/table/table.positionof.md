---
title: Table.PositionOf
---

# Table.PositionOf


Mengembalikan kedudukan baris dalam jadual.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

Mengembalikan kedudukan baris untuk tika pertama bagi `row` dalam `table` yang ditentukan. Mengembalikan -1 jika tiada kejadian ditemui.

-   `table`: Jadual input.
-   `row`: Baris dalam jadual untuk mencari kedudukan.
-   `occurrence`: *(Pilihan)* menentukan kejadian baris untuk dikembalikan.
-   `equationCriteria`: *(Pilihan)* Mengawal perbandingan antara baris jadual.


## Examples

### Example #1
Cari kedudukan tika pertama bagi \[a = 2, b = 4\] dalam jadual `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
Cari kedudukan tika kedua bagi \[a = 2, b = 4\] dalam jadual `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
Cari kedudukan semua tika bagi \[a = 2, b = 4\] dalam jadual `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
