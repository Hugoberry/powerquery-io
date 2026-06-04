---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Kodira posebne znake v skladu s standardom RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Kodira posebne znake v vnosu `data` v skladu s pravili standarda RFC 3986.


## Examples

### Example #1
Kodirajte posebne znake v"+money$".
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
