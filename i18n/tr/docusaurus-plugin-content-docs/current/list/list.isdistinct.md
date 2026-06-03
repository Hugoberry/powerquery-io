---
title: List.IsDistinct
---

# List.IsDistinct


Listede yinelenen değerlerin olup olmadığını gösterir.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

`list` listesinde yinelenen değerlerin olup olmadığı ile ilgili mantıksal bir değer döndürür; liste farklı değerler içeriyorsa `true`, listede yinelenen değerler varsa `false` döndürür.


## Examples

### Example #1
\{1, 2, 3\} listesinin farklı olup olmadığını bulur (örn. yinelenen değer yok).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2
\{1, 2, 3, 3\} listesinin farklı olup olmadığını bulur (örn. yinelenen değer yok).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
