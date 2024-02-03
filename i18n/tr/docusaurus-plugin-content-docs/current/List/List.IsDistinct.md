---
title: List.IsDistinct
---

# List.IsDistinct


## Description

Listede yinelenen değerlerin olup olmadığını gösterir.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

<code>list</code> listesinde yinelenen değerlerin olup olmadığı ile ilgili mantıksal bir değer döndürür; liste farklı değerler içeriyorsa <code>true</code>, listede yinelenen değerler varsa <code>false</code> döndürür. 


## Examples

### Example #1 
\{1, 2, 3} listesinin farklı olup olmadığını bulur (örn. yinelenen değer yok).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2, 3, 3} listesinin farklı olup olmadığını bulur (örn. yinelenen değer yok).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
