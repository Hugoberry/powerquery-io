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

Hiermee wordt het resultaat geretourneerd van het omzetten van een binaire lijst met getallen `binary` naar een tekstwaarde. `encoding` kan optioneel worden opgegeven om de codering aan te geven die in de geproduceerde tekstwaarde moet worden gebruikt. De volgende `BinaryEncoding`\-waarden kunnen worden gebruikt voor `encoding`.

-   `BinaryEncoding.Base64`: Base 64-codering
-   `BinaryEncoding.Hex`: hexadecimale codering



## Category
Binary
