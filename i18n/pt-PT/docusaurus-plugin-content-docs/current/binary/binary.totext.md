---
title: Binary.ToText
---

# Binary.ToText


Codifica dados binários para um formato de texto.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Devolve o resultado da conversão de uma lista de números binários `binary` num valor de texto. Opcionalmente, `encoding` pode ser especificado para indicar a codificação a utilizar no valor de texto produzido Os valores `BinaryEncoding` que se seguem podem ser utilizados para `encoding`.

-   `BinaryEncoding.Base64`: codificação Base 64
-   `BinaryEncoding.Hex`: codificação hexadecimal



## Category
Binary
