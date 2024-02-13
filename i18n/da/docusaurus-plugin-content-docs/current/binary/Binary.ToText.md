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

Returnerer resultatet af at konvertere en binær liste over tal <code>binary</code> til en tekstværdi. Du kan vælge at specificere <code>encoding</code> for at angive den kodning, der skal bruges i tekstværdien      Følgende <code>BinaryEncoding</code>-værdier kan bruges til <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64-kodning</li>        <li><code>BinaryEncoding.Hex</code>: Hex-kodning</li>      </ul>



## Category
Binary
