---
title: List.MinN
---

# List.MinN


## Description

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


## Details

Devolve os valores mínimos da lista, <code>list</code>. O parámetro, <code>countOrCondition</code>, especifica o número de valores a devolver ou unha condición de filtrado. O parámetro opcional, <code>comparisonCriteria</code>, especifica como comparar os valores da lista.<ul>        <li> <code>list</code>: A lista de valores.</li>        <li> <code>countOrCondition</code>: Se se especifica un número, devólvese unha lista de ata <code>countOrCondition</code> elementos en orde ascendente. Se se especifica unha condición, devólvese unha lista de elementos que inicialmente cumpren a condición. Unha vez que un elemento falla a condición, non se consideran máis elementos. Se este parámetro é nulo, devólvese o único valor máis pequeno da lista.</li><li><code>comparisonCriteria</code>: <i>[Opcional]</i> Pódese especificar un valor opcional <code>comparisonCriteria</code> para determinar como comparar os elementos da lista. Se este parámetro é nulo, utilízase o comparador predefinido.</li></ul>


## Examples

### Example #1 
Buscar os 5 valores máis pequenos da lista &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
