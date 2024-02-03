---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Užkoduokite specialiuosius simbolius pagal RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Užkoduokite specialiuosius simbolius, esančius įvestyje <code>data</code>, pagal RFC 3986 taisykles.


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
