---
title: Binary.FromText
---

# Binary.FromText


## Description

Avkodar data från ett textformat till binärformat.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Returnerar resultatet från konverteringen av textvärdet <code>text</code> till ett binärvärde (lista med <code>number</code>). <code>encoding</code> kan användas för att ange kodningen som ska användas i textvärdet.      Följande <code>BinaryEncoding</code>-värden kan användas för <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64-kodning</li>        <li><code>BinaryEncoding.Hex</code>: Hexadecimal kodning</li>      </ul>


## Examples

### Example #1 
Avkoda &#34;1011&#34; till binärformat.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Avkoda &#34;1011&#34; till binärformat med hexadecimal kodning.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
