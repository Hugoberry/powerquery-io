---
title: List.LastN
---

# List.LastN


Devuelve una lista con el último elemento o elementos de la lista especificada. Si lo desea, puede especificar cuántos valores devolver o una condición que cumplir.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Devuelve una lista con el último elemento o elementos de la lista especificada.

-   `list`: lista que se va a examinar. Si la lista está vacía, se devuelve una lista vacía.
-   `countOrCondition`: (Opcional) admite la recopilación de varios elementos o el filtrado de elementos. Aunque este parámetro aparece como opcional, se produce un error si no se proporciona este valor o si es `null`. Este parámetro se puede especificar de dos formas:
    -   Si se especifica un número, se devuelven hasta ese número de elementos.
    -   Si se especifica una condición, se devuelven todos los elementos que cumplen la condición, empezando por el final de la lista. Cuando un elemento no cumple la condición, no se consideran más elementos.


## Examples

### Example #1
Buscar el último valor de la lista \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Buscar los últimos valores de la lista \{3, 4, 5, -1, 7, 8, 2\} que sean mayores que 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
