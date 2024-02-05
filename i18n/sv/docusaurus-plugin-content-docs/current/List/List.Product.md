---
title: List.Product
---

# List.Product


## Description

Returnerar produkten av talen i listan.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Returnerar produkten av talen i listan, <code>numbersList</code>, som inte är null. Returnerar null om det inte finns några värden som inte är null i listan.


## Examples

### Example #1 
Hitta produkten av talen i listan &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
