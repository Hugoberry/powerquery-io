---
title: List.Positions
---

# List.Positions


Retorna uma lista de deslocamentos para a entrada.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Retorna uma lista de deslocamentos para a lista de entrada <code>list</code>.    Ao usar List.Transform para alterar uma lista, a lista de posições pode ser usada para conceder acesso de transformação à posição.


## Examples

### Example #1 
Localize os deslocamentos de valores na lista \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
