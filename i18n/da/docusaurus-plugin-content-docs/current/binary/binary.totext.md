---
title: Binary.ToText
---

# Binary.ToText


Afkoder binære data til en tekstformular.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Returnerer resultatet af at konvertere en binær liste over tal `binary` til en tekstværdi. Du kan vælge at specificere `encoding` for at angive den kodning, der skal bruges i tekstværdien Følgende `BinaryEncoding`\-værdier kan bruges til `encoding`.

-   `BinaryEncoding.Base64`: Base 64-kodning
-   `BinaryEncoding.Hex`: Hex-kodning



## Category
Binary
