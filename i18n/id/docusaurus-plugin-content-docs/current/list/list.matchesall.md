---
title: List.MatchesAll
---

# List.MatchesAll


Menghasilkan benar jika fungsi kondisi dipenuhi oleh semua nilai dalam daftar.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Menghasilkan `true` jika fungsi kondisi dipenuhi oleh semua nilai dalam daftar, atau jika sebaliknya, `false` akan dihasilkan.

-   `list`: Daftar yang berisi nilai yang akan diperiksa.
-   `condition`: Kondisi untuk memeriksa nilai dalam daftar.


## Examples

### Example #1
Menentukan jika semua nilai dalam daftar \{11, 12, 13\} lebih besar dari 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Menentukan jika semua nilai dalam daftar \{1, 2, 3\} lebih besar dari 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Menentukan apakah nilai teks apa pun dalam daftar berisi "anna" tanpa memperhatikan huruf besar/kecil.
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
Menentukan apakah semua tanggal berisi tahun 2021.
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
