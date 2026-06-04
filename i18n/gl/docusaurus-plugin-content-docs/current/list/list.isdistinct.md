---
title: List.IsDistinct
---

# List.IsDistinct


Indica se hai duplicados na lista.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Devolve un valor lóxico se hai duplicados na lista `list`; `true` se a lista é diferente, `false` se hai valores duplicados.


## Examples

### Example #1
Buscar se a lista \{1, 2, 3\} é diferente (é dicir, non ten duplicados).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2
Buscar se a lista \{1, 2, 3, 3\} é diferente (é dicir, non ten duplicados).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
