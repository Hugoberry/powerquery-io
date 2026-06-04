---
title: List.ContainsAny
---

# List.ContainsAny


Menunjukkan bila daftar mencakup salah satu nilai dalam daftar lain.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Menunjukkan apakah daftar berisi nilai apa pun dari daftar lain. Mengembalikan `true` jika nilai ditemukan dalam daftar, `false` jika sebaliknya.

-   `list`: Daftar yang akan dicari.
-   `values`: Daftar nilai yang akan dicari dalam daftar pertama.
-   `equationCriteria`: (Opsional) Pembanding yang digunakan untuk menentukan apakah dua nilai sama.


## Examples

### Example #1
Menentukan apakah daftar \{1, 2, 3, 4, 5\} berisi 3 atau 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Menentukan apakah daftar \{1, 2, 3, 4, 5\} berisi 6 atau 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Menentukan apakah daftar berisi kuda atau burung hantu, sambil mengabaikan huruf besar/kecil.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Menentukan apakah daftar berisi tanggal 8 April 2022 atau 12 Januari 2021.
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
