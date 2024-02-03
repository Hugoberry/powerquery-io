---
title: List.Positions
---

# List.Positions


## Description

Palauttaa siirtymien luettelon syötteelle.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Palauttaa siirtymien luettelon syöteluettelolle <code>list</code>.    Kun luetteloa muutetaan kohteen List.Transform avulla, sijaintien luettelon avulla voidaan antaa muunnokselle sijainnin käyttö.


## Examples

### Example #1 
Selvitä luettelon \{1, 2, 3, 4, null, 5} arvojen siirtymät.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
