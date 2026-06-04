---
title: List.RemoveLastN
---

# List.RemoveLastN


Devolve unha lista que elimina o número de elementos especificado do final da lista.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Devolve unha lista que elimina os últimos `countOrCondition` elementos do final da lista `list`. Se `list` ten menos de `countOrCondition` elementos, devólvese unha lista baleira.

-   Se se especifica un número, elimínanse ata ese número.
-   Se se especifica unha condición, eliminaranse todos os elementos coincidentes consecutivos ao final de `list`.
-   Se este parámetro é nulo, só se elimina un elemento.


## Examples

### Example #1
Crea unha lista a partir de \{1, 2, 3, 4, 5\} sen os 3 últimos números.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Crea unha lista de \{5, 4, 2, 6, 4\} que termina cun número menor que 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
