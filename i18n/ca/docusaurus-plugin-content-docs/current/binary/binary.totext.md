---
title: Binary.ToText
---

# Binary.ToText


Codifica les dades binàries en un formulari de text.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Retorna el resultat de convertir una llista binària de nombres `binary` en un valor de text. Com a opció, es pot especificar `encoding` per indicar la codificació que s'utilitzarà al valor de text produït. Els valors `BinaryEncoding` següents es poden utilitzar per a `encoding`.

-   `BinaryEncoding.Base64`: codificació en base 64
-   `BinaryEncoding.Hex`: codificació hexadecimal



## Category
Binary
