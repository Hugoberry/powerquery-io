---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Kodira posebne znake v skladu s standardom RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Kodira posebne znake v vnosu <code>data</code> v skladu s pravili standarda RFC 3986.


## Examples

### Example #1 
Kodirajte posebne znake v &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
