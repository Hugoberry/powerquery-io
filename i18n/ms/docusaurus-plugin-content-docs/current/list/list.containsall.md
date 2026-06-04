---
title: List.ContainsAll
---

# List.ContainsAll


Menunjukkan yang mana senarai menyertakan semua nilai dalam senarai lain.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Menunjukkan sama ada senarai menyertakan semua nilai daripada senarai lain. Mengembalikan `benar` jika semua nilai ditemui dalam senarai, `palsu` sebaliknya.

-   `list`: Senarai untuk dicari.
-   `values`: Senarai nilai untuk dicari dalam senarai pertama.
-   `equationCriteria`: (Pilihan) Pembanding yang digunakan untuk menentukan jika dua nilai adalah sama.


## Examples

### Example #1
Tentukan sama ada senarai \{1, 2, 3, 4, 5\} mengandungi 3 dan 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Tentukan sama ada senarai \{1, 2, 3, 4, 5\} mengandungi 5 dan 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Tentukan sama ada senarai mengandungi anjing dan kuda, sambil mengabaikan huruf besar atau kecil.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Tentukan sama ada senarai mengandungi tarikh 8 April 2022 dan 6 Julai 2021.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAll(Source, {#date(2022, 4, 8), #date(2021, 7, 6)})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
