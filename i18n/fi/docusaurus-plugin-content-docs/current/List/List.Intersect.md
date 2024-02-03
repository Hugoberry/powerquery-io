---
title: List.Intersect
---

# List.Intersect


## Description

Palauttaa syötteestä löydettyjen luetteloarvojen leikkauksen.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Palauttaa syöteluettelosta <code>lists</code> löydettyjen luetteloarvojen leikkauksen. Valinnainen parametri <code>equationCriteria</code> voidaan määrittää.


## Examples

### Example #1 
Selvitä luetteloiden \{1..5}, \{2..6}, \{3..7} leikkaus.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
