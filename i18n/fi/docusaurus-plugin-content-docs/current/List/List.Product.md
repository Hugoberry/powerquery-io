---
title: List.Product
---

# List.Product


## Description

Palauttaa luettelon lukujen tulon.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Palauttaa luettelon <code>numbersList</code> muiden kuin tyhjäarvoisten lukujen tulon. Palauttaa tyhjäarvon, jos luettelossa ei ole muita kuin tyhjäarvoja.


## Examples

### Example #1 
Selvitä luettelon &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; lukujen tulo.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
