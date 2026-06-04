---
title: List.Product
---

# List.Product


Pateikiamas sąrašo skaičių produktas.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Pateikiamas sąrašo ne neapibrėžtų skaičių produktas, `numbersList`. Jei sąraše nėra ne neapibrėžtų reikšmių, pateikiamas rezultatas yra lygus nuliui.


## Examples

### Example #1
Raskite skaičių produktą sąraše `{1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
