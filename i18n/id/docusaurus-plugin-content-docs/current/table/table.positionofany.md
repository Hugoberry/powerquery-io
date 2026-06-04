---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Menghasilkan posisi atau memposisikan salah satu baris yang ditetapkan dalam tabel.


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

Mengembalikan posisi baris dari `table` pada kemunculan pertama daftar `rows`. Mengembalikan -1 jika tidak ada kemunculan yang ditemukan.

-   `table`: Tabel input.
-   `rows`: Daftar baris dalam tabel untuk menemukan posisi.
-   `occurrence`: *(Opsional)* Menentukan kemunculan baris mana yang akan dikembalikan.
-   `equationCriteria`: *(Opsional)* Mengontrol perbandingan antar baris tabel.


## Examples

### Example #1
Mencari posisi kemunculan pertama \[a = 2, b = 4\] atau \[a = 6, b = 8\] dalam tabel `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Mencari posisi semua kemunculan \[a = 2, b = 4\] atau \[a = 6, b = 8\] dalam tabel `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
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
