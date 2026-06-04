---
title: List.Single
---

# List.Single


Palauttaa yhden luettelokohteen luettelon, jonka pituus on yksi, muussa tapauksessa aiheuttaa virheen.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Jos luettelossa `list` on vain yksi kohde, palauttaa kyseisen kohteen. Jos kohteita on useita tai luettelo on tyhjä, funktio aiheuttaa virheen.


## Examples

### Example #1
Selvitä luettelon \{1\} yksittäinen arvo.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Selvitä luettelon \{1, 2, 3\} yksittäinen arvo.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
