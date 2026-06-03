---
title: Binary.FromText
---

# Binary.FromText


Decodes data from a text form into binary.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Returns the result of converting text value `text` to a binary (list of `number`). `encoding` may be specified to indicate the encoding used in the text value. The following `BinaryEncoding` values may be used for `encoding`.

-   `BinaryEncoding.Base64`: Base 64 encoding
-   `BinaryEncoding.Hex`: Hex encoding


## Examples

### Example #1
Decode "1011" into binary.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Decode "1011" into binary with Hex encoding.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
