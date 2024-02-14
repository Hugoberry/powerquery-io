---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Codifica caracteres especiais de acordo com o RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Codifica caracteres especiais na entrada <code>data</code> de acordo com as regras do RFC 3986.


## Examples

### Example #1 
Codifique os caracteres especiais em &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
