---
title: Binary.ToText
---

# Binary.ToText


Descodifica datos binarios nun formato de texto.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Devolve o resultado de converter unha lista binaria de números `binary` nun valor de texto. Opcionalmente, pódese especificar `encoding` para indicar a codificación que se vai usar no valor de texto producido Pódense usar os seguintes valores `BinaryEncoding` para `encoding`.

-   `BinaryEncoding.Base64`: codificación base 64
-   `BinaryEncoding.Hex`: codificación Hex



## Category
Binary
