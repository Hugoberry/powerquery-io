---
title: List.Product
---

# List.Product


Devuelve el producto de los números de la lista.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Devuelve el producto de los números que no son NULL de la lista, <code>numbersList</code>. Devuelve NULL si no hay valores no NULL en la lista.


## Examples

### Example #1 
Buscar el producto de los números de la lista &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
