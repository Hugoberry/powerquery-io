---
title: Binary.ToText
---

# Binary.ToText


Codeert binaire gegevens naar tekst.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Hiermee wordt het resultaat geretourneerd van het omzetten van een binaire lijst met getallen <code>binary</code> naar een tekstwaarde. <code>encoding</code> kan optioneel worden opgegeven om de codering aan te geven die in de geproduceerde tekstwaarde moet worden gebruikt. De volgende <code>BinaryEncoding</code>-waarden kunnen worden gebruikt voor <code>encoding</code>. <ul> <li><code>BinaryEncoding.Base64</code>: Base 64-codering</li> <li><code>BinaryEncoding.Hex</code>: hexadecimale codering</li> </ul>



## Category
Binary
