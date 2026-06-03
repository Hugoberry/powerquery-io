---
title: List.Transform
---

# List.Transform


Devolve uma nova lista de valores calculados a partir desta lista.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Devolve uma nova lista de valores aplicando a função de transformação `transform` à lista, `list`.


## Examples

### Example #1
Adicionar 1 a cada valor existente na lista \{1, 2\}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
