---
title: List.First
---

# List.First


## Description

Devuelve el primer valor de la lista o el valor predeterminado especificado si está vacía.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Devuelve el primer elemento de la lista <code>list</code> o el valor predeterminado opcional <code>defaultValue</code>, si la lista está vacía.    Si la lista está vacía y no se especifica un valor predeterminado, la función devuelve <code>null</code>.


## Examples

### Example #1 
Buscar el primer valor de la lista \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Buscar el primer valor de la lista \{}. Si la lista está vacía, se devuelve -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
