---
title: List.Product
---

# List.Product


## Description

Повертає добуток чисел у списку.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Повертає добуток ненульових чисел у списку, <code>numbersList</code>. Повертає null, якщо у списку немає ненульових значень.


## Examples

### Example #1 
Знайти добуток чисел у списку &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
