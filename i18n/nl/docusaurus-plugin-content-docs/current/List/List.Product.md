---
title: List.Product
---

# List.Product


## Description

Retourneert het product van de getallen in de lijst.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Retourneert het product van de getallen in de lijst, <code>numbersList</code>, die niet gelijk zijn aan nul. Retourneert null als er in de lijst geen waarden staan die niet gelijk zijn aan nul.


## Examples

### Example #1 
Het product van de getallen in de lijst &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; zoeken.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
