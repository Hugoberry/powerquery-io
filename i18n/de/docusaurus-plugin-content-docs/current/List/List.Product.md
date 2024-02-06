---
title: List.Product
---

# List.Product


Gibt das Produkt der Zahlen in der Liste zurück.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Gibt das Produkt der Zahlen ungleich null in der Liste "<code>numbersList</code>" zurück. Enthält die Liste keine Werte ungleich null, wird NULL zurückgegeben.


## Examples

### Example #1 
Ermittelt das Produkt der Zahlen in der Liste &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
