---
title: List.Last
---

# List.Last


Devuelve el último valor de la lista o el valor predeterminado especificado si está vacío.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Devuelve el último elemento de la lista especificada o el valor predeterminado opcional si la lista está vacía.

-   `list`: la lista que se va a examinar.
-   `defaultValue`: (Opcional) valor predeterminado que se devuelve si la lista está vacía. Si la lista está vacía y no se especifica un valor predeterminado, la función devuelve `null`.


## Examples

### Example #1
Buscar el último valor de la lista \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Buscar el último valor de la lista \{\} o devolver -1 si está vacía.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
