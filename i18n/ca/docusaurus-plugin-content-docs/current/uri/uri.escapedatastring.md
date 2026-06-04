---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Codifica els caràcters especials d'acord amb RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Codifica els caràcters especials a l'entrada `data` d'acord amb les regles d'RFC 3986.


## Examples

### Example #1
Codifiqueu els caràcters especials a "+money$".
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
