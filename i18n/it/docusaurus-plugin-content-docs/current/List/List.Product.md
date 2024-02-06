---
title: List.Product
---

# List.Product


Restituisce il prodotto dei numeri nell&#39;elenco.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Restituisce il prodotto dei numeri non Null nell'elenco <code>numbersList</code>. Restituisce Null se non sono presenti valori non Null nell'elenco.


## Examples

### Example #1 
Trovare il prodotto dei numeri nell&#39;elenco &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
