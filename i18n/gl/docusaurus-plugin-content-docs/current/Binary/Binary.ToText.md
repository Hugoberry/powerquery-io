---
title: Binary.ToText
---

# Binary.ToText


## Description

Descodifica datos binarios nun formato de texto.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Devolve o resultado de converter unha lista binaria de números <code>binary</code> nun valor de texto. Opcionalmente, pódese especificar <code>encoding</code> para indicar a codificación que se vai usar no valor de texto producido      Pódense usar os seguintes valores <code>BinaryEncoding</code> para <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: codificación base 64</li>        <li><code>BinaryEncoding.Hex</code>: codificación Hex</li>      </ul>



## Category
Binary
