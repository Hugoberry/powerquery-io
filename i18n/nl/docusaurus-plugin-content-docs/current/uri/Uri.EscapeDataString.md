---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Codeert speciale tekens in overeenstemming met RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Codeert speciale tekens in de invoer <code>data</code> in overeenstemming met de regels van RFC 3986.


## Examples

### Example #1 
De speciale tekens coderen in &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
