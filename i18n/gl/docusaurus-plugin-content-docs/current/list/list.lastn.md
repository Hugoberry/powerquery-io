---
title: List.LastN
---

# List.LastN


Devolve unha lista co último elemento ou elementos da lista especificada. Opcionalmente pode especificar o número de valores que vai devolver ou unha condición de cualificación.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Devolve unha lista do último elemento ou elementos da lista especificada.

-   `list` : A lista a examinar. Se a lista está baleira, devolverase unha lista baleira.
-   `countOrCondition` : (Opcional) Admite a recollida de varios elementos ou o filtrado de elementos. Aínda que este parámetro aparece como opcional, prodúcese un erro se non se proporciona este valor ou é `nulo`. Este parámetro pódese especificar de dúas maneiras:
    -   Se se especifica un número, devólvense ata ese número de elementos.
    -   Se se especifica unha condición, devólvense todos os elementos que a cumpran, comezando polo final da lista. Unha vez que un elemento non cumpre a condición, non se consideran máis elementos.


## Examples

### Example #1
Buscar o último valor da lista \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Buscar os últimos valores da lista \{3, 4, 5, -1, 7, 8, 2\} que son maiores que 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
