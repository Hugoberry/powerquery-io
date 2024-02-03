---
title: Binary.FromText
---

# Binary.FromText


## Description

Szöveges formátumú adatokat bináris formátumra dekódol.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

A <code>text</code> szöveges érték bináris formátumra való konvertálásának eredményét adja vissza (<code>number</code> elemeket tartalmazó lista). Az <code>encoding</code> megadható úgy, hogy megjelenítse a szöveges értékben használt kódolást.      A következő <code>BinaryEncoding</code> értékek használhatók az <code>encoding</code> esetében.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64-kódolás</li>        <li><code>BinaryEncoding.Hex</code>: hexadecimális kódolás</li>      </ul>


## Examples

### Example #1 
Bináris formátumra dekódolja az „1011” értéket.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Hexadecimális kódolással bináris formátumra dekódolja az „1011” értéket.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
