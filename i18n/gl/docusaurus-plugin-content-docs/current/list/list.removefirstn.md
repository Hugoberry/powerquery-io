---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Devolve unha lista que ignora o número de elementos especificado no inicio da lista.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Devolve unha lista que elimina o primeiro elemento da lista `list`. Se `list` é unha lista baleira devólvese unha lista baleira. Esta función toma un parámetro opcional, `countOrCondition`, para admitir a eliminación de varios valores como se indica a continuación.

-   Se se especifica un número, elimínanse ata ese número.
-   Se se especifica unha condición, eliminaranse todos os elementos coincidentes consecutivos ao comezo de `list`.
-   Se este parámetro é nulo, obsérvase o comportamento predeterminado.


## Examples

### Example #1
Cree unha lista de \{1, 2, 3, 4, 5\} sen os 3 primeiros números.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Cree unha lista de \{5, 4, 2, 6, 1\} que comece cun número menor que 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
