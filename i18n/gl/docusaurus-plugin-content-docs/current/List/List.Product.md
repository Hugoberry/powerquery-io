---
title: List.Product
---

# List.Product


## Description

Devolve o produto dos números da lista.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Devolve o produto dos números non nulos da lista, <code>numbersList</code>. Devolve nulo se non hai valores non nulos na lista.


## Examples

### Example #1 
Buscar o produto dos números da lista &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
