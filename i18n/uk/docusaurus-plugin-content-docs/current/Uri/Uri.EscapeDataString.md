---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Кодує спеціальні символи згідно з RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Кодує спеціальні символи у вхідних даніх <code>data</code> згідно з правилами RFC 3986.


## Examples

### Example #1 
Кодування спеціальних символів у &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
