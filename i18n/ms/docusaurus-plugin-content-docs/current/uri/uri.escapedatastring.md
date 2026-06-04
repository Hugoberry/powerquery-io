---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Kodkan aksara khas dengan mengikut RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Kodkan aksara khas dalam input `data` dengan mengikut peraturan RFC 3986.


## Examples

### Example #1
Kodkan aksara khas dalam "+money$".
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
