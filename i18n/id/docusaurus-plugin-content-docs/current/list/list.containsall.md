---
title: List.ContainsAll
---

# List.ContainsAll


Menunjukkan bila daftar mencakup semua nilai dalam daftar lain.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Menunjukkan apakah daftar berisi semua nilai dari daftar lain. Mengembalikan `true` jika semua nilai ditemukan dalam daftar, `false` jika sebaliknya.

-   `list`: Daftar yang akan dicari.
-   `values`: Daftar nilai yang akan dicari dalam daftar pertama.
-   `equationCriteria`: (Opsional) Pembanding yang digunakan untuk menentukan apakah dua nilai sama.


## Examples

### Example #1
Menentukan apakah daftar \{1, 2, 3, 4, 5\} berisi 3 dan 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Menentukan apakah daftar \{1, 2, 3, 4, 5\} berisi 5 dan 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Menentukan apakah daftar berisi anjing dan kuda, sambil mengabaikan huruf besar/kecil.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Menentukan apakah daftar berisi tanggal 8 April 2022 dan 6 Juli 2021.
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
