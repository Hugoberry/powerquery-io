---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Koşul işlevi listedeki tüm değerler tarafından sağlanıyorsa doğru değerini döndürür.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

<code>condition</code> koşul işlevi <code>list</code> listesindeki tüm değerler tarafından sağlanıyorsa <code>true</code> değerini, aksi halde <code>false</code> değerini döndürür.


## Examples

### Example #1 
\{11, 12, 13} listesindeki tüm değerlerin 10&#39;dan büyük olup olmadığını bulur.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2, 3} listesindeki tüm değerlerin 10&#39;dan büyük olup olmadığını bulur.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
