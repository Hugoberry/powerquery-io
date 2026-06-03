---
title: Binary.ToText
---

# Binary.ToText


Kodar binärdata till ett textformat.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Returnerar resultatet från konverteringen av en binärlista med tal `binary` till ett textvärde. Alternativt kan `encoding` anges för att indikera kodningen som ska användas i textvärdet som genereras Följande `BinaryEncoding`\-värden kan användas för `encoding`.

-   `BinaryEncoding.Base64`: Base 64-kodning
-   `BinaryEncoding.Hex`: Hexadecimal kodning



## Category
Binary
