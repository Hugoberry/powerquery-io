---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

RFC 3986 стандартына сәйкес арнайы таңбаларды кодтайды.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

<code>data</code> енгізуіндегі арнайы таңбаларды RFC 3986 стандартына сәйкес кодтайды.


## Examples

### Example #1 
&#34;+money$&#34; ішіндегі арнайы таңбаларды кодтайды.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
