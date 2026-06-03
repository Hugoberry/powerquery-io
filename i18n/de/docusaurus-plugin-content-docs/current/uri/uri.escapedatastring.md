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

Codiert Sonderzeichen in der Eingabe '`data`' entsprechend den RFC 3986-Richtlinien.


## Examples

### Example #1
Codieren der Sonderzeichen in "+money$".
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
