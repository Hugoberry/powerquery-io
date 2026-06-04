---
title: List.Product
---

# List.Product


Vrne zmnožek števil na seznamu.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Vrne zmnožek neničelnih števil na seznamu, `numbersList`. Vrne"null", če na seznamu ni neničelnih vrednosti.


## Examples

### Example #1
Poiščite zmnožek števil na seznamu `{1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
