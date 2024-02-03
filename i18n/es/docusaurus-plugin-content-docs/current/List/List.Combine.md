---
title: List.Combine
---

# List.Combine


## Description

Devuelve una sola lista combinando varias.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Toma una lista de listas, <code>lists</code>, y las combina en una sola lista nueva.


## Examples

### Example #1 
Combinar las dos listas simples \{1, 2} y \{3, 4}.
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
Combinar las dos listas, \{1, 2} y \{3, \{4, 5}}, una de las cuales contiene una lista anidada.
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
