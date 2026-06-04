---
title: Binary.Split
---

# Binary.Split


Jakaa määritetyn binaarin binaariluetteloksi käyttäen määritettyä sivukokoa.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Jakaa `binary`:n binaariluetteloksi, jossa tulosteluettelon ensimmäinen elementti on binaarinen, joka sisältää ensimmäiset `pageSize` tavua kohteesta lähdebinaarista. Tulosteluettelon seuraava elementti on binaari, joka sisältää seuraavat `pageSize` tavua lähdebinaarista, ja niin edelleen.



## Category
Binary
