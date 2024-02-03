---
title: List.Product
---

# List.Product


## Description

Zwraca iloczyn liczb z listy.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Zwraca iloczyn liczb innych niż null z listy <code>numbersList</code>. Zwraca wartość null, jeśli na liście nie znajdują się wartości inne niż null.


## Examples

### Example #1 
Znajdź iloczyn liczb na liście &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
