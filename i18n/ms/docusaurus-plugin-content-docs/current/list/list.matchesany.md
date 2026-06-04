---
title: List.MatchesAny
---

# List.MatchesAny


Mengembalikan benar jika fungsi syarat dipuaskan oleh sebarang nilai.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Mengembalikan `benar` jika fungsi syarat dipuaskan oleh sebarang nilai dalam senarai, sebaliknya mengembalikan `palsu`.

-   `list`: Senarai yang mengandungi nilai untuk disemak.
-   `condition`: Syarat untuk disemak terhadap nilai dalam senarai.


## Examples

### Example #1
Tentukan jika sebarang nilai dalam senarai \{9, 10, 11\} lebih besar daripada 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Tentukan jika sebarang nilai dalam senarai \{1, 2, 3\} lebih besar daripada 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Tentukan sama ada sebarang nilai teks dalam senarai mengandungi "cat" sambil mengabaikan huruf besar dan kecil.
```powerquery
let
    Source = {"A Brown Fox", "A Loyal Dog", "A Curious Cat", "A Wild Horse", "A Rascally Rabbit"},
    Result = List.MatchesAny(Source, each Text.Contains(_, "cat", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Tentukan sama ada sebarang tarikh mengandungi tahun 2021.
```powerquery
let
    Source = {#date(2024, 11, 28), #date(2023, 1, 14), #date(2021, 12, 31), #date(2025, 7, 6)},
    Result = List.MatchesAny(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
