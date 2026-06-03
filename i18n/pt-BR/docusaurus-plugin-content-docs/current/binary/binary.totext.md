---
title: Binary.ToText
---

# Binary.ToText


Codifica dados binários em formato de texto.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Retorna o resultado da conversão de uma lista binária de números `binary` em valor de texto. Se desejar, `encoding` pode ser especificado para indicar a codificação a ser usada no valor de texto produzido Os valores `BinaryEncoding` a seguir podem ser usados para `encoding`.

-   `BinaryEncoding.Base64`: codificação de base 64
-   `BinaryEncoding.Hex`: codificação hexadecimal



## Category
Binary
