---
title: Binary.ToText
---

# Binary.ToText


## Description

Codifica dados binários em formato de texto.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Retorna o resultado da conversão de uma lista binária de números <code>binary</code> em valor de texto. Se desejar, <code>encoding</code> pode ser especificado para indicar a codificação a ser usada no valor de texto produzido      Os valores <code>BinaryEncoding</code> a seguir podem ser usados para <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: codificação de base 64</li>        <li><code>BinaryEncoding.Hex</code>: codificação hexadecimal</li>      </ul>



## Category
Binary
