---
title: List.Contains
---

# List.Contains


Menunjukkan sama ada senarai mengandungi nilai.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Menunjukkan sama ada senarai mengandungi nilai yang ditentukan. Mengembalikan `benar` jika nilai ditemui dalam senarai, `palsu` sebaliknya.

-   `list`: Senarai untuk dicari.
-   `value`: Nilai untuk dicari dalam senarai.
-   `equationCriteria`: (Pilihan) Pembanding yang digunakan untuk menentukan jika dua nilai adalah sama.


## Examples

### Example #1
Tentukan sama ada senarai \{1, 2, 3, 4, 5\} mengandungi 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Tentukan sama ada senarai \{1, 2, 3, 4, 5\} mengandungi 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Mengabaikan huruf besar atau kecil, tentukan jika senarai mengandungi "rhubarb".
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
Tentukan sama ada senarai mengandungi tarikh 8 April 2022.
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
