---
title: Binary.FromText
---

# Binary.FromText


## Description

Decodeert gegevens van tekst naar binair.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Hiermee wordt het resultaat geretourneerd van het omzetten van een tekstwaarde <code>text</code> naar een binaire waarde (lijst met <code>number</code>). <code>encoding</code> kan worden opgegeven om de codering aan te geven die in de tekstwaarde is gebruikt. De volgende <code>BinaryEncoding</code>-waarden kunnen worden gebruikt voor <code>encoding</code>. <ul> <li><code>BinaryEncoding.Base64</code>: Base 64-codering</li> <li><code>BinaryEncoding.Hex</code>: hexadecimale codering</li> </ul>


## Examples

### Example #1 
&#34;1011&#34; decoderen naar binair.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
&#34;1011&#34; decoderen naar binair met hexadecimale codering.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
