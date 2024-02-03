---
title: List.Product
---

# List.Product


## Description

Возвращает произведение чисел в списке.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Возвращает произведение чисел в списке <code>numbersList</code>, отличных от NULL. Возвращает значение NULL, если в списке нет значений, отличных от NULL.


## Examples

### Example #1 
Найти произведение чисел в списке &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
