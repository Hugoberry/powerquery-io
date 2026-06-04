---
title: List.Transform
---

# List.Transform


Palauttaa tästä luettelosta lasketun uuden arvojen luettelon.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

Palauttaa uuden arvojen luettelon käyttämällä muunnosfunktiota `transform` luettelolle `list`.


## Examples

### Example #1
Lisää 1 luettelon \{1, 2\} kuhunkin arvoon.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
