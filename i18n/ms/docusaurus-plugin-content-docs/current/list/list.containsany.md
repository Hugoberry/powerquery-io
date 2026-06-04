---
title: List.ContainsAny
---

# List.ContainsAny


Menunjukkan yang mana senarai menyertakan sebarang nilai dalam senarai lain.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Menunjukkan sama ada senarai mengandungi sebarang nilai daripada senarai lain. Mengembalikan `benar` jika nilai ditemui dalam senarai, `palsu` sebaliknya.

-   `list`: Senarai untuk dicari.
-   `values`: Senarai nilai untuk dicari dalam senarai pertama.
-   `equationCriteria`: (Pilihan) Pembanding yang digunakan untuk menentukan jika dua nilai adalah sama.


## Examples

### Example #1
Tentukan sama ada senarai \{1, 2, 3, 4, 5\} mengandungi 3 atau 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Tentukan sama ada senarai \{1, 2, 3, 4, 5\} mengandungi 6 atau 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Tentukan sama ada senarai mengandungi kuda atau burung hantu, sambil mengabaikan huruf besar atau kecil.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Tentukan sama ada senarai mengandungi tarikh 8 April 2022 atau 12 Januari 2021.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
