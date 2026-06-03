---
title: Binary.ToText
---

# Binary.ToText


Code les données binaires en texte.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Retourne le résultat de la conversion d'une liste binaire de numéros `binary` dans une valeur de texte. Au besoin, `encoding` peut être spécifié pour indiquer le codage à utiliser dans la valeur de texte produite Les valeurs `BinaryEncoding` suivantes peuvent être utilisées pour `encoding`.

-   `BinaryEncoding.Base64` : codage en base 64
-   `BinaryEncoding.Hex` : codage hexadécimal



## Category
Binary
