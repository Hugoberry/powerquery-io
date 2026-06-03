---
title: List.IsDistinct
---

# List.IsDistinct


Indica si hay duplicados en la lista.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Devuelve un valor lógico si hay duplicados en la lista `list`; `true` si la lista es distinta, `false` si hay valores duplicados.


## Examples

### Example #1
Buscar si la lista \{1, 2, 3\} es distinta (es decir, no hay duplicados).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2
Buscar si la lista \{1, 2, 3, 3\} es distinta (es decir, no hay duplicados).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
