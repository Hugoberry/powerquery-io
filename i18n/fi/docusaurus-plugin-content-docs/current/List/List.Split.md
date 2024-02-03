---
title: List.Split
---

# List.Split


## Description

Jakaa määritetyn luettelon luetteloiden luetteloksi käyttäen määritettyä sivun kokoa.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

Jakaa <code>list</code> luetteloluetteloksi, jossa tulosteluettelon ensimmäinen elementti on luettelo, joka sisältää lähdeluettelon ensimmäiset <code>pageSize</code> elementit. Tulosteluettelon seuraava elementti on luettelo, joka sisältää lähdeluettelon seuraavat <code>pageSize</code> elementit.  ja niin edelleen.



## Category
List.Transformation functions
