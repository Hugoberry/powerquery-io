---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Mengembalikan kedudukan sebarang daripada baris yang ditentukan dalam jadual.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Mengembalikan kedudukan baris dari `table` pada kejadian pertama senarai bagi `rows`. Mengembalikan -1 jika tiada kejadian ditemui.

-   `table`: Jadual input.
-   `rows`: Senarai baris dalam jadual untuk mencari kedudukan.
-   `occurrence`: *(Pilihan)* menentukan kejadian baris untuk dikembalikan.
-   `equationCriteria`: *(Pilihan)* Mengawal perbandingan antara baris jadual.


## Examples

### Example #1
Cari kedudukan tika pertama bagi \[a = 2, b = 4\] atau \[a = 6, b = 8\] dalam jadual `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
Cari kedudukan semua tika bagi \[a = 2, b = 4\] atau \[a = 6, b = 8\] dalam jadual `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
