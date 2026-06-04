---
title: List.MinN
---

# List.MinN


Retorna el valor o els valors mínims de la llista. Es pot especificar el nombre de valors que es retornaran o la condició de filtració.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Retorna els valors mínims de la llista, `list`. El paràmetre, `countOrCondition`, especifica el nombre de valors per retornar o una condició de filtre. El paràmetre opcional, `comparisonCriteria`, especifica el mode de comparació dels valors de la llista.

-   `list`: Llista de valors.
-   `countOrCondition`: si s'especifica un nombre, es retorna una llista amb, com a màxim, `countOrCondition` elements en ordre ascendent. Si s'especifica una condició, es retorna una llista d'elements que, d'entrada, compleixen les condicions. Quan un element no compleix la condició, no se'n consideren més. Si aquest paràmetre és nul, es retorna el valor únic més petit de la llista.
-   `comparisonCriteria`: *(opcional)* es pot especificar `comparisonCriteria` valor opcional per determinar com comparar els elements de la llista. Si aquest paràmetre és nul, es fa servir el comparador per defecte.


## Examples

### Example #1
Troba els 5 valor més petits de la llista `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
