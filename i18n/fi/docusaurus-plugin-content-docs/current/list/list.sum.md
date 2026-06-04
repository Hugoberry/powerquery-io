---
title: List.Sum
---

# List.Sum


Palauttaa luettelon kohteiden summan.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Palauttaa luettelon `list` muiden kuin tyhjäarvoisten arvojen summan. Palauttaa tyhjäarvon, jos luettelossa ei ole muita kuin tyhjäarvoja.


## Examples

### Example #1
Selvitä luettelon `{1, 2, 3}` lukujen summa.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
