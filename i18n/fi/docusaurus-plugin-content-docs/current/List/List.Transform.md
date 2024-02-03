---
title: List.Transform
---

# List.Transform


## Description

Palauttaa tästä luettelosta lasketun uuden arvojen luettelon.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Palauttaa uuden arvojen luettelon käyttämällä muunnosfunktiota <code>transform</code> luettelolle <code>list</code>.


## Examples

### Example #1 
Lisää 1 luettelon \{1, 2} kuhunkin arvoon.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
