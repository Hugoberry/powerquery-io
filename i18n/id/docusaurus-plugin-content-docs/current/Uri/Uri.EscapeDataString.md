---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Enkode karakter khusus sesuai RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Enkode karakter khusus di <code>data</code> masukan sesuai aturan RFC 3986.


## Examples

### Example #1 
Enkode karakter khusus di &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
