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

Devuelve el resultado de convertir una lista binaria de números <code>binary</code> en un valor text. También puede especificar <code>encoding</code> para indicar la codificación que se usará en el valor text producido.      Los siguientes valores <code>BinaryEncoding</code> se pueden usar para <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: codificación Base 64.</li>        <li><code>BinaryEncoding.Hex</code>: codificación hexadecimal</li>      </ul>



## Category
Binary
