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

Returns the result of converting a binary list of numbers `binary` into a text value. Optionally, `encoding` may be specified to indicate the encoding to be used in the text value produced The following `BinaryEncoding` values may be used for `encoding`.

-   `BinaryEncoding.Base64`: Base 64 encoding
-   `BinaryEncoding.Hex`: Hex encoding



## Category
Binary
