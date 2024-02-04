---
title: List.Product
---

# List.Product


## Description

Devolve o produto dos números existentes na lista.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Devolve o produto dos números não nulos existentes na lista, <code>numbersList</code>. Devolve nulo se não existirem valores não nulos na lista.


## Examples

### Example #1 
Determinar o produto dos números existentes na lista &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
