---
title: Binary.ToText
---

# Binary.ToText


## Description

Bináris formátumú adatokat szöveges formátumra kódol.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

A(z) <code>binary</code> bináris számlista szöveges értékre való konvertálásának eredményét adja vissza. A(z) <code>encoding</code> megadható úgy is, hogy megjelenítse a létrehozandó szöveges értékben használandó kódolást.      A következő <code>BinaryEncoding</code> értékek használhatók a(z) <code>encoding</code> esetében.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64-kódolás</li>        <li><code>BinaryEncoding.Hex</code>: Hexadecimális kódolás</li>      </ul>



## Category
Binary
