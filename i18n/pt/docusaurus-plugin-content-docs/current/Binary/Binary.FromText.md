---
title: Binary.FromText
---

# Binary.FromText


## Description

Decodes data from a text form into binary.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Returns the result of converting text value <code>text</code> to a binary (list of <code>number</code>). <code>encoding</code> may be specified to indicate the encoding used in the text value.      The following <code>BinaryEncoding</code> values may be used for <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64 encoding</li>        <li><code>BinaryEncoding.Hex</code>: Hex encoding</li>      </ul>


## Examples

### Example #1 
Decode &#34;1011&#34; into binary.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Decode &#34;1011&#34; into binary with Hex encoding.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
