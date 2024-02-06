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

<code>condition</code> koşul işlevi <code>list</code> listesindeki herhangi bir değer tarafından sağlanıyorsa <code>true</code> değerini, aksi halde <code>false</code> değerini döndürür.


## Examples

### Example #1 
\{9, 10, 11} listesindeki herhangi bir değerin 10&#39;dan büyük olup olmadığını bulur.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2, 3} listesindeki herhangi bir değerin 10&#39;dan büyük olup olmadığını bulur.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
