---
title: Binary.ToText
---

# Binary.ToText


Bináris formátumú adatokat szöveges formátumra kódol.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

A(z) `binary` bináris számlista szöveges értékre való konvertálásának eredményét adja vissza. A(z) `encoding` megadható úgy is, hogy megjelenítse a létrehozandó szöveges értékben használandó kódolást. A következő `BinaryEncoding` értékek használhatók a(z) `encoding` esetében.

-   `BinaryEncoding.Base64`: Base 64-kódolás
-   `BinaryEncoding.Hex`: Hexadecimális kódolás



## Category
Binary
