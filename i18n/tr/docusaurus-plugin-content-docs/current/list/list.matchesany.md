---
title: List.MatchesAny
---

# List.MatchesAny


Koşul işlevi listedeki herhangi bir değer tarafından sağlanıyorsa doğru değerini döndürür.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Koşul işlevi listedeki değerlerden herhangi biri tarafından karşılanırsa `true` döndürür, aksi takdirde `false` döndürür.

-   `list`: Kontrol edilecek değerleri içeren liste.
-   `condition`: Listedeki değerlere karşı kontrol edilecek koşul.


## Examples

### Example #1
\{9, 10, 11\} listesindeki değerlerden herhangi birinin 10'dan büyük olup olmadığını belirleyin.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
\{1, 2, 3\} listesindeki değerlerden herhangi birinin 10'dan büyük olup olmadığını belirleyin.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Listedeki metin değerlerinden herhangi birinin “cat” içerip içermediğini büyük/küçük harfi göz ardı ederek belirleyin.
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
Tarihlerden herhangi birinin 2021 yılını içerip içermediğini belirleyin.
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
