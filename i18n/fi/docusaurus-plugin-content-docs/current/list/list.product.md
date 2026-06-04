---
title: List.Product
---

# List.Product


Palauttaa luettelon lukujen tulon.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Palauttaa luettelon `numbersList` muiden kuin tyhjäarvoisten lukujen tulon. Palauttaa tyhjäarvon, jos luettelossa ei ole muita kuin tyhjäarvoja.


## Examples

### Example #1
Selvitä luettelon `{1, 2, 3, 3, 4, 5, 5}` lukujen tulo.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
