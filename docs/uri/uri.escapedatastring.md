---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Encodes special characters in accordance with RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Encodes special characters in the input <code>data</code> according to the rules of RFC 3986.


## Examples

### Example #1 
Encode the special characters in &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
