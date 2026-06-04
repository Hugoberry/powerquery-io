---
title: List.Last
---

# List.Last


Devolve o último valor da lista ou o valor predefinido especificado se está baleiro.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Devolve o último elemento da lista concreta ou o valor predeterminado opcional se a lista está baleira.

-   `list`: a lista que hai que examinar.
-   `defaultValue` : (Opcional) O valor predefinido que se devolverá se a lista está baleira. Se a lista está baleira e non se especifica un valor predeterminado, a función devolve `null`.


## Examples

### Example #1
Buscar o último valor da lista \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Buscar o último valor da lista \{\} ou -1 se está baleira.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
