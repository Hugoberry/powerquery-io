---
title: List.PositionOfAny
---

# List.PositionOfAny


Mengembalikan ofset pertama bagi nilai dalam senarai.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Mengembalikan offset yang item daripada senarai nilai yang ditentukan muncul dalam senarai. Mengembalikan -1 jika tiada kejadian ditemui.

-   `list`: Senarai untuk dicari.
-   `values`: Senarai nilai untuk dicari dalam senarai asal.
-   `occurrence`: (Pilihan) Kejadian khusus untuk dilaporkan. Nilai ini boleh jadi `Occurrence.First`, `Occurrence.Last`, atau `Occurrence.All`. Jika tiada `occurrence` yang ditentukan, `Occurrence.First` digunakan.
-   `equationCriteria`: (Pilihan) Menentukan cara persamaan ditentukan apabila membandingkan nilai. Parameter ini boleh menjadi fungsi pemilih kunci, fungsi pembanding, atau senarai yang mengandungi kedua-dua pemilih kunci dan pembanding.


## Examples

### Example #1
Kedudukan pertama dalam senarai \{1, 2, 3\} pada yang mana nilai 2 atau 3 muncul.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Cari kedudukan dalam senarai semua contoh tarikh dari 2022 atau 2023.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2025, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = {2022, 2023},
    FindPositions = List.PositionOfAny(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 2, 4}
```


### Example #3
Cari kedudukan dalam senarai bagi kejadian terakhir perkataan anjing atau kucing, mengabaikan huruf besar/kecil.
```powerquery
let
    Source = List.PositionOfAny(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        {"dog", "cat"},
        Occurrence.Last,
        Comparer.OrdinalIgnoreCase
    )
in
    Source
```

Result: 
```powerquery
6
```


### Example #4
Cari sebarang kedudukan dalam senarai yang berada dalam dua unit sama ada nombor 17 atau 28.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOfAny(
        Source,
        {17, 28},
        Occurrence.All,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
{1, 4}
```




## Category
List.Membership functions
