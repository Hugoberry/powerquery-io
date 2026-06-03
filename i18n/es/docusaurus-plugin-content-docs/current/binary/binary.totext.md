---
title: Binary.ToText
---

# Binary.ToText


Codifica datos binarios en un formato de texto.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Devuelve el resultado de convertir una lista binaria de números `binary` en un valor text. También puede especificar `encoding` para indicar la codificación que se usará en el valor text producido. Los siguientes valores `BinaryEncoding` se pueden usar para `encoding`.

-   `BinaryEncoding.Base64`: codificación Base 64.
-   `BinaryEncoding.Hex`: codificación hexadecimal



## Category
Binary
