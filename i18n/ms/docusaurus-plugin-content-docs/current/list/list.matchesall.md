---
title: List.MatchesAll
---

# List.MatchesAll


Mengembalikan benar jika fungsi syarat dipuaskan oleh semua nilai dalam senarai.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Mengembalikan `benar` jika fungsi syarat dipuaskan oleh semua nilai dalam senarai, sebaliknya mengembalikan `palsu`.

-   `list`: Senarai yang mengandungi nilai untuk disemak.
-   `condition`: Syarat untuk disemak terhadap nilai dalam senarai.


## Examples

### Example #1
Menentukan sama ada semua nilai dalam senarai \{11, 12, 13\} adalah lebih besar daripada 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Menentukan sama ada semua nilai dalam senarai \{1, 2, 3\} adalah lebih besar daripada 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Tentukan sama ada semua nilai teks dalam senarai mengandungi "anna" sambil mengabaikan huruf besar dan kecil.
```powerquery
let
    Source = {"Savannah", "Annabelle", "Annals", "wannabe", "MANNA"},
    Result = List.MatchesAll(Source, each Text.Contains(_, "anna", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Tentukan jika semua tarikh mengandungi tahun 2021.
```powerquery
let
    Source = {#date(2021, 11, 28), #date(2021, 1, 14), #date(2021, 12, 31), #date(2021, 7, 6)},
    Result = List.MatchesAll(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
