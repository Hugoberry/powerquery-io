---
title: List.IsEmpty
---

# List.IsEmpty


Devolve verdadeiro se a lista está baleira.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Devolve `true` se a lista, `list`, non contén valores (lonxitude 0). Se a lista contén valores (lonxitude > 0), devolve `false`.


## Examples

### Example #1
Buscar se a lista \{\} está baleira.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2
Buscar se a lista \{1, 2\} está baleira.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
