---
title: List.Product
---

# List.Product


## Description

Vrne zmnožek števil na seznamu.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Vrne zmnožek neničelnih števil na seznamu, <code>numbersList</code>. Vrne "null", če na seznamu ni neničelnih vrednosti.


## Examples

### Example #1 
Poiščite zmnožek števil na seznamu &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
