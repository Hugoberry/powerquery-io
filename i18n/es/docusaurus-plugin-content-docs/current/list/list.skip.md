---
title: List.Skip
---

# List.Skip


Devuelve una lista que omite el número especificado de elementos al principio de la lista.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Devuelve una lista que omite el primer elemento de la lista `list`. Si `list` es una lista vacía, se devuelve una lista vacía. Esta función toma un parámetro opcional, `countOrCondition`, para admitir la omisión de varios valores, como se muestra a continuación.

-   Si se especifica un número, se omiten hasta ese número de elementos.
-   Si se especifica una condición, se omiten los elementos coincidentes consecutivos al principio de `list`.
-   Si este parámetro es null, se observa el comportamiento predeterminado.


## Examples

### Example #1
Crear una lista a partir de \{1, 2, 3, 4, 5\} sin los primeros 3 números.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Crear una lista a partir de \{5, 4, 2, 6, 1\} que empiece con un número menor que 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
