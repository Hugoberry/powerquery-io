---
title: List.MatchesAny
---

# List.MatchesAny


Menghasilkan benar jika fungsi kondisi dipenuhi oleh nilai apa pun.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Menghasilkan `true` jika fungsi kondisi dipenuhi oleh nilai apa pun dalam daftar, atau jika sebaliknya, akan menghasilkan `false`.

-   `list`: Daftar yang berisi nilai yang akan diperiksa.
-   `condition`: Kondisi untuk memeriksa nilai dalam daftar.


## Examples

### Example #1
Menentukan apakah nilai apa pun dalam daftar \{9, 10, 11\} lebih besar dari 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Menentukan apakah nilai apa pun dalam daftar \{1, 2, 3\} lebih besar dari 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Menentukan apakah nilai teks apa pun dalam daftar berisi "anna" tanpa memperhatikan huruf besar/kecil.
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
Menentukan apakah salah satu tanggal berisi tahun 2021.
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
