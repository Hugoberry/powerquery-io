---
title: List.FirstN
---

# List.FirstN


Devolve o primeiro conxunto de elementos da lista especificando o número de elementos para devolver ou unha condición de cualificación.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Remarks

-   Se se especifica un número, devólvense os elementos ata chegar a ese número.
-   Se se especifica unha condición, devólvense todos os elementos que inicialmente cumpren a condición. Cando un elemento non cumpre a condición, non se teñen en conta máis elementos.


## Examples

### Example #1
Buscar os valores iniciais na lista \{3, 4, 5, -1, 7, 8, 2\} que son maiores que 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
