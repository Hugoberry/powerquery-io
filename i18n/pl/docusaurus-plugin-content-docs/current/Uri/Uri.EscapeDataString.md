---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Koduje znaki specjalne zgodnie ze standardem RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Koduje znaki specjalne w danych wejściowych <code>data</code> zgodnie z regułami standardu RFC 3986.


## Examples

### Example #1 
Kodowanie znaków specjalnych w ciągu „+money$”.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
