---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Užkoduokite specialiuosius simbolius pagal RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Užkoduokite specialiuosius simbolius, esančius įvestyje `data`, pagal RFC 3986 taisykles.


## Examples

### Example #1
Užkoduokite specialiuosius simbolius, esančius „+money$“.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
