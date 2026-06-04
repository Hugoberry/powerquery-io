---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Enkode karakter khusus sesuai RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Enkode karakter khusus di `data` masukan sesuai aturan RFC 3986.


## Examples

### Example #1
Enkode karakter khusus di "+money$".
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
