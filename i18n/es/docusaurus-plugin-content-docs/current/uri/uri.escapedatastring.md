---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Codifica caracteres especiales de acuerdo con RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Codifica caracteres especiales en la entrada <code>data</code> de acuerdo con las reglas de RFC 3986.


## Examples

### Example #1 
Codifique los caracteres especiales en &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
