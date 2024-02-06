---
title: List.RemoveLastN
---

# List.RemoveLastN


Devuelve una lista que quita el número especificado de elementos del final de la lista.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Devuelve una lista que quita los <code>countOrCondition</code> últimos elementos del final de la lista <code>list</code>. Si <code>list</code> tiene menos de <code>countOrCondition</code> elementos, se devuelve una lista vacía. <ul> <li>Si se especifica un número, se quitan hasta ese número de elementos. </li> <li>Si se especifica una condición, la lista devuelta termina con el primer elemento de la parte inferior de <code>list</code> que cumple los criterios. Una vez que un elemento no cumple la condición, no se consideran más elementos. </li> <li>Si este parámetro es null, solo se quita un elemento. </li> </ul>


## Examples

### Example #1 
Crear una lista a partir de \{1, 2, 3, 4, 5} sin los 3 últimos números.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Crear una lista a partir de \{5, 4, 2, 6, 4} que termine con un número menor que 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
