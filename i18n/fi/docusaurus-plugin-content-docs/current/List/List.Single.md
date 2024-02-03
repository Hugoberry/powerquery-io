---
title: List.Single
---

# List.Single


## Description

Palauttaa yhden luettelokohteen luettelolle, jonka pituus on yksi, ja aiheuttaa muussa tapauksessa poikkeuksen.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Jos luettelossa <code>list</code> on vain yksi kohde, palauttaa kyseisen kohteen.    Jos luettelossa on useampi kuin yksi kohde tai luettelo on tyhjä, funktio aiheuttaa poikkeuksen.


## Examples

### Example #1 
Selvitä luettelon \{1} yksittäinen arvo.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Selvitä luettelon \{1, 2, 3} yksittäinen arvo.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
