---
title: List.MinN
---

# List.MinN


Devuelve los valores mínimos de la lista. Puede especificarse la condición de filtrado o el número de valores que se van a devolver.


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

Devuelve los valores mínimos de la lista, `list`. El parámetro `countOrCondition` especifica el número de valores que devolver o una condición de filtrado. El parámetro opcional `comparisonCriteria` especifica cómo se comparan los valores de la lista.

-   `list`: la lista de valores.
-   `countOrCondition`: si se especifica un número, se devuelve una lista de hasta `countOrCondition` elementos en orden ascendente. Si se especifica una condición, se devuelve una lista de los elementos que cumplen inicialmente la condición. Si un elemento no cumple la condición, no se considerarán más elementos. Si este parámetro es null, se devuelve el valor más pequeño de la lista.
-   `comparisonCriteria`: *(Opcional)* Se puede especificar un valor opcional `comparisonCriteria` para determinar cómo comparar los elementos de la lista. Si este parámetro es null, se usa el comparador predeterminado.


## Examples

### Example #1
Buscar los cinco valores menores de la lista `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
