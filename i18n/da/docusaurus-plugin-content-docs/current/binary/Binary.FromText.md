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

Returnerer resultatet af at konvertere tekstværdien <code>text</code> til en binær (liste over <code>number</code>-værdier). <code>encoding</code> kan specificeres for at angive den kodning, der bruges i tekstværdien.      Følgende <code>BinaryEncoding</code>-værdier kan bruges til <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64-kodning</li>        <li><code>BinaryEncoding.Hex</code>: Hex-kodning</li>      </ul>


## Examples

### Example #1 
Afkod &#34;1011&#34; til binær.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Afkod &#34;1011&#34; til binær med Hex-kodning.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
