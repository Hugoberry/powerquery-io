---
title: Binary.FromText
---

# Binary.FromText


Afkoder data fra en tekstformular til binær.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Returnerer resultatet af at konvertere tekstværdien `text` til en binær (liste over `number`\-værdier). `encoding` kan specificeres for at angive den kodning, der bruges i tekstværdien. Følgende `BinaryEncoding`\-værdier kan bruges til `encoding`.

-   `BinaryEncoding.Base64`: Base 64-kodning
-   `BinaryEncoding.Hex`: Hex-kodning


## Examples

### Example #1
Afkod "1011" til binær.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Afkod "1011" til binær med Hex-kodning.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
