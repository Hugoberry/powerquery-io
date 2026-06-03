---
title: Binary.FromText
---

# Binary.FromText


Décode les données d'un texte en binaire.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Retourne le résultat de la conversion de la valeur de texte `text` dans une valeur binaire (liste de `number`). `encoding` peut être spécifié pour indiquer le codage utilisé dans la valeur de texte. Les valeurs `BinaryEncoding` suivantes peuvent être utilisées pour `encoding`.

-   `BinaryEncoding.Base64` : codage en base 64
-   `BinaryEncoding.Hex` : codage hexadécimal


## Examples

### Example #1
Décode "1011" en binaire.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Décode "1011" en binaire avec un codage hexadécimal.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
