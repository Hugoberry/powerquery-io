---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Codifica caracteres especiais de acordo con RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Codifica caracteres especiais na entrada `data` de acordo coas regras de RFC 3986.


## Examples

### Example #1
Codifique os caracteres especiais en "+money$".
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
