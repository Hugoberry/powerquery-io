---
title: Binary.FromText
---

# Binary.FromText


Szöveges formátumú adatokat bináris formátumra dekódol.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

A `text` szöveges érték bináris formátumra való konvertálásának eredményét adja vissza (`number` elemeket tartalmazó lista). Az `encoding` megadható úgy, hogy megjelenítse a szöveges értékben használt kódolást. A következő `BinaryEncoding` értékek használhatók az `encoding` esetében.

-   `BinaryEncoding.Base64`: Base 64-kódolás
-   `BinaryEncoding.Hex`: hexadecimális kódolás


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
