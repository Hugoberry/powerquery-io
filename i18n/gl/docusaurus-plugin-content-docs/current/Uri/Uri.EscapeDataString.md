---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Codifica caracteres especiais de acordo con RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Codifica caracteres especiais na entrada <code>data</code> de acordo coas regras de RFC 3986.


## Examples

### Example #1 
Codifique os caracteres especiais en &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
