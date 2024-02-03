---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Kodkan aksara khas dengan mengikut RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Kodkan aksara khas dalam input <code>data</code> dengan mengikut peraturan RFC 3986.


## Examples

### Example #1 
Kodkan aksara khas dalam &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
