---
title: Binary.FromText
---

# Binary.FromText


Decodeert gegevens van tekst naar binair.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Hiermee wordt het resultaat geretourneerd van het omzetten van een tekstwaarde `text` naar een binaire waarde (lijst met `number`). `encoding` kan worden opgegeven om de codering aan te geven die in de tekstwaarde is gebruikt. De volgende `BinaryEncoding`\-waarden kunnen worden gebruikt voor `encoding`.

-   `BinaryEncoding.Base64`: Base 64-codering
-   `BinaryEncoding.Hex`: hexadecimale codering


## Examples

### Example #1
"1011" decoderen naar binair.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
"1011" decoderen naar binair met hexadecimale codering.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
