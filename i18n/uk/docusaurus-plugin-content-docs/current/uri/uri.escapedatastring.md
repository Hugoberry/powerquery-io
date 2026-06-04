---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Кодує спеціальні символи згідно з RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Кодує спеціальні символи у вхідних даніх `data` згідно з правилами RFC 3986.


## Examples

### Example #1
Кодування спеціальних символів у "+money$".
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
