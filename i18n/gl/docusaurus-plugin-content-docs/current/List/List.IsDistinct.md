---
title: List.IsDistinct
---

# List.IsDistinct


## Description

Indica se hai duplicados na lista.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

Devolve un valor lóxico se hai duplicados na lista <code>list</code>; <code>true</code> se a lista é diferente, <code>false</code> se hai valores duplicados. 


## Examples

### Example #1 
Buscar se a lista \{1, 2, 3} é diferente (é dicir, non ten duplicados).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Buscar se a lista \{1, 2, 3, 3} é diferente (é dicir, non ten duplicados).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
