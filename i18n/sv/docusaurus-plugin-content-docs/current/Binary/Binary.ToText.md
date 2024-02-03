---
title: Binary.ToText
---

# Binary.ToText


## Description

Kodar binärdata till ett textformat.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Returnerar resultatet från konverteringen av en binärlista med tal <code>binary</code> till ett textvärde. Alternativt kan <code>encoding</code> anges för att indikera kodningen som ska användas i textvärdet som genereras      Följande <code>BinaryEncoding</code>-värden kan användas för <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64-kodning</li>        <li><code>BinaryEncoding.Hex</code>: Hexadecimal kodning</li>      </ul>



## Category
Binary
