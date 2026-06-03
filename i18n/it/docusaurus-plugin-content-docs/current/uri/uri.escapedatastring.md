---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Codifica i caratteri speciali in base allo standard RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Codifica i caratteri speciali nell'input `data` in base alle regole dello standard RFC 3986.


## Examples

### Example #1
Codificare i caratteri speciali in "+money$".
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
