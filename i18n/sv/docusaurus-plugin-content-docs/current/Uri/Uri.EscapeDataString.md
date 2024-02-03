---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Kodar specialtecken enligt RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Kodar specialtecken i indata <code>data</code> enligt reglerna i RFC 3986.


## Examples

### Example #1 
Kodar specialtecken i &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
