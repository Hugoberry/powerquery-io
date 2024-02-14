---
title: List.FirstN
---

# List.FirstN


Devuelve el primer conjunto de elementos de la lista especificando cuántos elementos devolver o una condición que cumplir.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Remarks

 <ul>  <li>Si se especifica un número, se devuelven hasta ese número de elementos. </li>  <li>Si se especifica una condición, se devuelven todos los elementos que cumplen inicialmente la condición. Una vez un elemento no cumple la condición, no se consideran más elementos. </li> </ul>


## Examples

### Example #1 
Buscar los valores iniciales en la lista \{3, 4, 5, -1, 7, 8, 2} que sean mayores que 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
