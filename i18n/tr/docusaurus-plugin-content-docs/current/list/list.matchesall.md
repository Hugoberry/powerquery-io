---
title: List.MatchesAll
---

# List.MatchesAll


Koşul işlevi listedeki tüm değerler tarafından sağlanıyorsa doğru değerini döndürür.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Koşul işlevi listedeki tüm değerler tarafından karşılanıyorsa `true` döndürür, aksi takdirde `false` döndürür.

-   `list`: Kontrol edilecek değerleri içeren liste.
-   `condition`: Listedeki değerlere karşı kontrol edilecek koşul.


## Examples

### Example #1
\{11, 12, 13\} listesindeki tüm değerlerin 10'dan büyük olup olmadığını bulur.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
\{1, 2, 3\} listesindeki tüm değerlerin 10'dan büyük olup olmadığını bulur.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Listedeki tüm metin değerlerinin “anna” içerip içermediğini büyük/küçük harfi göz ardı ederek belirleyin.
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
Tüm tarihlerin 2021 yılını içerip içermediğini belirleyin.
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
