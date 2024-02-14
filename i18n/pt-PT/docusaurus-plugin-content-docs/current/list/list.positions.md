---
title: List.Positions
---

# List.Positions


Devolve uma lista de desvios para a entrada.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Devolve uma lista de desvios para a lista de entrada <code>list</code>.    Quando utilizar List.Transform para alterar uma lista, é possível utilizar a lista de posições para fornecer o acesso de transformação à posição.


## Examples

### Example #1 
Determinar os desvios dos valores existentes na lista \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
