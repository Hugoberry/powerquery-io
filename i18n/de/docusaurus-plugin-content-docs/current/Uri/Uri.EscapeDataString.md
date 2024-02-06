---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Codiert Sonderzeichen entsprechend RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Codiert Sonderzeichen in der Eingabe '<code>data</code>' entsprechend den RFC 3986-Richtlinien.


## Examples

### Example #1 
Codieren der Sonderzeichen in &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
