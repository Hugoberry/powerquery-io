---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Codifica carateres especiais em conformidade com o RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Codifica carateres especiais na entrada <code>data</code> em conformidade com as regras do RFC 3986.


## Examples

### Example #1 
Codifique os carateres especiais em &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
