---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Realizează codificarea caracterelor speciale în conformitate cu regulile RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Realizează codificarea caracterelor speciale din intrarea `data` în conformitate cu regulile RFC 3986.


## Examples

### Example #1
Codificați caracterele speciale din "+bani$".
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
