---
title: Binary.ToText
---

# Binary.ToText


## Description

Codifica les dades binàries en un formulari de text.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Retorna el resultat de convertir una llista binària de nombres <code>binary</code> en un valor de text. Com a opció, es pot especificar <code>encoding</code> per indicar la codificació que s'utilitzarà al valor de text produït.      Els valors <code>BinaryEncoding</code> següents es poden utilitzar per a <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: codificació en base 64</li>        <li><code>BinaryEncoding.Hex</code>: codificació hexadecimal</li>      </ul>



## Category
Binary
