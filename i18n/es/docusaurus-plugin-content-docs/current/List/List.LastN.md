---
title: List.LastN
---

# List.LastN


Devuelve el último valor de la lista.  Si lo desea, puede especificar cuántos valores devolver o una condición que cumplir.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Devuelve el último elemento de la lista <code>list</code>. Si la lista está vacía, se inicia una excepción. Esta función toma un parámetro opcional <code>countOrCondition</code> para recopilar varios elementos o filtrarlos. <code>countOrCondition</code> se puede especificar de tres formas: <ul>  <li>Si se especifica un número, se devuelven hasta ese número de elementos. </li>  <li>Si se especifica una condición, se devuelven todos los elementos que cumplen inicialmente la condición, a partir del final de la lista. Una vez un elemento no cumple la condición, no se consideran más elementos. </li>  <li>Si este parámetro es NULL, se devuelve el último elemento de la lista.</li> </ul>


## Examples

### Example #1 
Buscar el último valor de la lista \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Buscar los últimos valores de la lista \{3, 4, 5, -1, 7, 8, 2} que sean mayores que 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
