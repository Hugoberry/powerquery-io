---
title: Table.PositionOf
---

# Table.PositionOf


Menghasilkan posisi atau memposisikan baris dalam tabel.


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

Mengembalikan posisi baris kemunculan pertama `row` di `table` yang ditetapkan. Mengembalikan -1 jika tidak ada kemunculan yang ditemukan.

-   `table`: Tabel input.
-   `row`: Baris dalam tabel untuk menemukan posisi.
-   `occurrence`: *(Opsional)* Menentukan kemunculan baris mana yang akan dikembalikan.
-   `equationCriteria`: *(Opsional)* Mengontrol perbandingan antar baris tabel.


## Examples

### Example #1
Mencari posisi kemunculan pertama \[a = 2, b = 4\] dalam tabel `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Mencari posisi kemunculan kedua \[a = 2, b = 4\] dalam tabel `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Mencari posisi semua kemunculan \[a = 2, b = 4\] dalam tabel `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
