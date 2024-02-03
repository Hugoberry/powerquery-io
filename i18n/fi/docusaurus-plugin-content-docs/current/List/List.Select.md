---
title: List.Select
---

# List.Select


## Description

Palauta ehtoa vastaavien arvojen luettelon.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Palauttaa luettelosta <code>list</code> luettelon arvoista, jotka vastaavat valintaehtoa <code>selection</code>.


## Examples

### Example #1 
Selvitä luettelosta \{1, -3, 4, 9, -2} arvot, jotka ovat suurempia kuin 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
