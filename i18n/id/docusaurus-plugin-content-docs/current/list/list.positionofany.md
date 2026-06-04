---
title: List.PositionOfAny
---

# List.PositionOfAny


Menghasilkan offset pertama nilai dalam daftar.


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

Mengembalikan offset dengan item dari daftar nilai yang ditentukan muncul dalam suatu daftar. Mengembalikan -1 jika tidak ada kemunculan yang ditemukan.

-   `list`: Daftar yang akan dicari.
-   `values`: Daftar nilai yang ditemukan dalam daftar asli.
-   `occurrence`: (Opsional) Kemunculan tertentu yang akan dilaporkan. Nilai ini dapat berupa `Occurrence.First`, `Occurrence.Last`, atau `Occurrence.All`. Jika tidak ada `occurrence` yang ditentukan, `Occurrence.First` digunakan.
-   `equationCriteria`: (Opsional) Menentukan bagaimana kesetaraan ditentukan saat membandingkan nilai. Parameter ini dapat berupa fungsi pemilih kunci, fungsi pembanding, atau daftar yang berisi pemilih kunci dan pembanding.


## Examples

### Example #1
Mencari posisi pertama dalam daftar \{1, 2, 3\} yang menampilkan nilai 2 atau 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Temukan posisi dalam daftar semua contoh tanggal dari 2022 atau 2023.
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
Temukan posisi dalam daftar tempat kata anjing atau kucing terakhir kali muncul, abaikan huruf besar/kecilnya.
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
Temukan posisi mana pun dalam daftar yang berada dalam jarak dua unit dari angka 17 atau 28.
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
