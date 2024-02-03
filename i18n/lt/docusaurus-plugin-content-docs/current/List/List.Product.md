---
title: List.Product
---

# List.Product


## Description

Pateikiamas sąrašo skaičių produktas.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Pateikiamas sąrašo ne neapibrėžtų skaičių produktas, <code>numbersList</code>. Jei sąraše nėra ne neapibrėžtų reikšmių, pateikiamas rezultatas yra lygus nuliui.


## Examples

### Example #1 
Raskite skaičių produktą sąraše &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
