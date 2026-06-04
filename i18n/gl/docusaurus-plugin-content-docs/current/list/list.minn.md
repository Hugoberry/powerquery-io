---
title: List.MinN
---

# List.MinN


Devolve os valores mínimos da lista. Pode especificarse a condición de filtrado ou o número de valores que se van devolver.


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

Devolve o(s) valor(es) mínimo(s) da lista, `list` . O parámetro, `countOrCondition` , especifica o número de valores que se devolverán ou unha condición de filtrado. O parámetro opcional, `comparisonCriteria` , especifica como comparar os valores da lista.

-   `list` : A lista de valores.
-   `countOrCondition` : Se se especifica un número, devólvese unha lista de ata `countOrCondition` elementos en orde ascendente. Se se especifica unha condición, devólvese unha lista de elementos que inicialmente cumpren a condición. Unha vez que un elemento falla a condición, non se consideran máis elementos. Se este parámetro é nulo, devólvese o valor individual máis pequeno da lista.
-   `comparisonCriteria` : *(Opcional)* Pódese especificar un valor opcional `comparisonCriteria` para determinar como comparar os elementos da lista. Se este parámetro é nulo, úsase o comparador predeterminado.


## Examples

### Example #1
Buscar os 5 valores máis pequenos da lista `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
