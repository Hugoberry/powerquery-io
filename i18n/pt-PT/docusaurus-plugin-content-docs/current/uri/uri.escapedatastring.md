---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Codifica carateres especiais em conformidade com o RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Codifica carateres especiais na entrada `data` em conformidade com as regras do RFC 3986.


## Examples

### Example #1
Codifique os carateres especiais em "+money$".
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
