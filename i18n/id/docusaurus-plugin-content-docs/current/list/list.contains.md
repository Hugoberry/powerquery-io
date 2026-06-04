---
title: List.Contains
---

# List.Contains


Menunjukkan apakah daftar berisi nilai.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Menunjukkan apakah daftar berisi nilai yang ditentukan. Mengembalikan `true` jika nilai ditemukan dalam daftar, `false` jika sebaliknya.

-   `list`: Daftar yang akan dicari.
-   `value`: Nilai yang akan dicari dalam daftar.
-   `equationCriteria`: (Opsional) Pembanding yang digunakan untuk menentukan apakah dua nilai sama.


## Examples

### Example #1
Menentukan apakah daftar \{1, 2, 3, 4, 5\} berisi 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Menentukan apakah daftar \{1, 2, 3, 4, 5\} berisi 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Mengabaikan huruf besar/kecil, tentukan apakah daftar tersebut berisi "rhubarb".
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
Tentukan apakah daftar berisi tanggal 8 April 2022.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
