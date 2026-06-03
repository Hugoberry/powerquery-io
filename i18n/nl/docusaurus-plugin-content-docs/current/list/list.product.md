---
title: List.Product
---

# List.Product


Retourneert het product van de getallen in de lijst.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Retourneert het product van de getallen in de lijst, `numbersList`, die niet gelijk zijn aan nul. Retourneert null als er in de lijst geen waarden staan die niet gelijk zijn aan nul.


## Examples

### Example #1
Het product van de getallen in de lijst `{1, 2, 3, 3, 4, 5, 5}` zoeken.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
