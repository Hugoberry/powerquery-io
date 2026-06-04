---
title: List.PositionOf
---

# List.PositionOf


Mengembalikan ofset bagi nilai dalam senarai.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Mengembalikan offset apabila nilai yang ditentukan muncul dalam senarai. Mengembalikan -1 jika nilai tidak muncul.

-   `list`: Senarai untuk dicari.
-   `value`: Nilai untuk dicari dalam senarai.
-   `occurrence`: (Pilihan) Kejadian khusus untuk dilaporkan. Nilai ini boleh jadi `Occurrence.First`, `Occurrence.Last`, atau `Occurrence.All`. Jika tiada `occurrence` yang ditentukan, `Occurrence.First` digunakan.
-   `equationCriteria`: (Pilihan) Menentukan cara persamaan ditentukan apabila membandingkan nilai. Parameter ini boleh menjadi fungsi pemilih kunci, fungsi pembanding, atau senarai yang mengandungi kedua-dua pemilih kunci dan pembanding.


## Examples

### Example #1
Cari kedudukan dalam senarai \{1, 2, 3\} pada yang mana nilai 3 muncul.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Cari kedudukan dalam senarai semua contoh tarikh dari 2022.
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2022, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = 2022,
    FindPositions = List.PositionOf(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 3, 4}
```


### Example #3
Cari kedudukan dalam senarai bagi kejadian terakhir perkataan anjing, mengabaikan kes.
```powerquery
let
    Source = List.PositionOf(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        "dog",
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
Cari kedudukan dalam senarai yang berada dalam dua unit daripada nombor 28.
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOf(
        Source,
        28,
        Occurrence.First,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
4
```




## Category
List.Membership functions
