---
title: List.PositionOf
---

# List.PositionOf


Menghasilkan offset nilai dalam daftar.


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

Menghasilkan offset di mana nilai yang ditentukan muncul dalam daftar. Menghasilkan -1 jika nilai tidak muncul.

-   `list`: Daftar yang akan dicari.
-   `value`: Nilai yang akan ditemukan dalam daftar.
-   `occurrence`: (Opsional) Kemunculan tertentu yang akan dilaporkan. Nilai ini dapat berupa `Occurrence.First`, `Occurrence.Last`, atau `Occurrence.All`. Jika tidak ada `occurrence` yang ditentukan, `Occurrence.First` digunakan.
-   `equationCriteria`: (Opsional) Menentukan bagaimana kesetaraan ditentukan saat membandingkan nilai. Parameter ini dapat berupa fungsi pemilih kunci, fungsi pembanding, atau daftar yang berisi pemilih kunci dan pembanding.


## Examples

### Example #1
Mencari posisi dalam daftar \{1, 2, 3\} yang menampilkan nilai 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
Temukan posisi dalam daftar berisi semua kemunculan tanggal dari 2022.
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
Temukan posisi dalam daftar saat kata anjing terakhir muncul, tidak peka huruf besar/kecil.
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
Temukan posisi dalam daftar yang berada dalam dua unit dari angka 28.
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
