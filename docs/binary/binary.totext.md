---
title: Binary.ToText
---

# Binary.ToText


Encodes binary data into a text form.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Returns the result of converting a binary list of numbers <code>binary</code> into a text value. Optionally, <code>encoding</code> may be specified to indicate the encoding to be used in the text value produced      The following <code>BinaryEncoding</code> values may be used for <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64 encoding</li>        <li><code>BinaryEncoding.Hex</code>: Hex encoding</li>      </ul>



## Category
Binary
