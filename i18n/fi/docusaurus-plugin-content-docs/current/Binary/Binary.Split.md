---
title: Binary.Split
---

# Binary.Split


## Description

Jakaa määritetyn binaarin binaariluetteloksi käyttäen määritettyä sivukokoa.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

Jakaa <code>binary</code>:n binaariluetteloksi, jossa tulosteluettelon ensimmäinen elementti on binaarinen, joka sisältää ensimmäiset <code>pageSize</code> tavua kohteesta     lähdebinaarista. Tulosteluettelon seuraava elementti on binaari, joka sisältää seuraavat <code>pageSize</code> tavua lähdebinaarista, ja niin edelleen.



## Category
Binary
