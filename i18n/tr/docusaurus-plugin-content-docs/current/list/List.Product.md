---
title: List.Product
---

# List.Product


Listedeki sayıların çarpımını döndürür.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

<code>numbersList</code> listesindeki null olmayan sayıların çarpımını döndürür. Listede null olmayan değer yoksa null döndürülür.


## Examples

### Example #1 
&lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; listesindeki sayıların çarpımını bulur.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
