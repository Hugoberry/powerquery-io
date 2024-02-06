---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Devuelve una lista que omite el número especificado de elementos al principio de la lista.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Devuelve una lista que quita el primer elemento de la lista <code>list</code>. Si <code>list</code> es una lista vacía, se devuelve una lista vacía.Esta función toma un parámetro opcional (<code>countOrCondition</code>) para poder quitar varios valores según se muestra a continuación. <ul><li>Si se especifica un número, se quitan hasta ese número de elementos. </li> <li>Si se especifica una condición, la lista devuelta empieza por el primer elemento de <code>list</code> que cumple los criterios. Si un elemento no cumple la condición, no se considerarán más elementos. </li> <li>Si este parámetro es "null", se observa el comportamiento predeterminado. </li> </ul>


## Examples

### Example #1 
Crear una lista a partir de \{1, 2, 3, 4, 5} sin los 3 primeros números.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Crear una lista a partir de \{5, 4, 2, 6, 1} que empiece con un número menor que 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
