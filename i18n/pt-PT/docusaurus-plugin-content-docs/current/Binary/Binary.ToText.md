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

Devolve o resultado da conversão de uma lista de números binários <code>binary</code> num valor de texto. Opcionalmente, <code>encoding</code> pode ser especificado para indicar a codificação a utilizar no valor de texto produzido      Os valores <code>BinaryEncoding</code> que se seguem podem ser utilizados para <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: codificação Base 64</li>        <li><code>BinaryEncoding.Hex</code>: codificação hexadecimal</li>      </ul>



## Category
Binary
