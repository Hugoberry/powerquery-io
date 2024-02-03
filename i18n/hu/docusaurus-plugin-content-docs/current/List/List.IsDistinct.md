---
title: List.IsDistinct
---

# List.IsDistinct


## Description

Jelzi, hogy a listán vannak-e ismétlődő elemek.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

Logikai értéket ad vissza aszerint, hogy a(z) <code>list</code> listán vannak-e ismétlődő elemek; <code>true</code>, ha a lista minden eleme különbözik; <code>false</code>, ha vannak a listán ismétlődő értékek. 


## Examples

### Example #1 
Annak meghatározása, hogy az \{1, 2, 3} lista értékei egyediek-e (vagyis nincsenek ismétlődések)
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Annak meghatározása, hogy az \{1, 2, 3, 3} lista értékei egyediek-e (vagyis nincsenek ismétlődések)
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
