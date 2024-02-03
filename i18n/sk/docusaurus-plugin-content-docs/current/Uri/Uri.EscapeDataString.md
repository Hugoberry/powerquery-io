---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Kóduje špeciálne znaky podľa štandardu RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Kóduje špeciálne znaky v rámci vstupu <code>data</code> podľa pravidiel štandardu RFC 3986.


## Examples

### Example #1 
Kóduje špeciálne znaky: &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
