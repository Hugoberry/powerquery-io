---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

Poistaa kaikki null-tyhjäarvot määritetystä luettelosta.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

Poistaa kaikki null-tyhjäarvojen esiintymät kohteesta <code>list</code>. Jos luettelossa ei ole null-tyhjäarvoja, palautetaan alkuperäinen luettelo.


## Examples

### Example #1 
Poista null-tyhjäarvot luettelosta \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
