---
title: List.Product
---

# List.Product


## Description

Retorna o produto dos números na lista.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Retorna o produto dos números não nulos na lista, <code>numbersList</code>. Retornará um valor nulo se não houver valores não nulos na lista.


## Examples

### Example #1 
Localize o produto dos números na lista &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
