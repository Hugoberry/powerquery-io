---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Realizează codificarea caracterelor speciale în conformitate cu regulile RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Realizează codificarea caracterelor speciale din intrarea <code>data</code> în conformitate cu regulile RFC 3986.


## Examples

### Example #1 
Codificați caracterele speciale din &#34;+bani$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
