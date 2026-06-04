---
title: List.Split
---

# List.Split


Jakaa määritetyn luettelon luetteloiden luetteloksi käyttäen määritettyä sivun kokoa.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Jakaa `list` luetteloluetteloksi, jossa tulosteluettelon ensimmäinen elementti on luettelo, joka sisältää lähdeluettelon ensimmäiset `pageSize` elementit. Tulosteluettelon seuraava elementti on luettelo, joka sisältää lähdeluettelon seuraavat `pageSize` elementit. ja niin edelleen.



## Category
List.Transformation functions
