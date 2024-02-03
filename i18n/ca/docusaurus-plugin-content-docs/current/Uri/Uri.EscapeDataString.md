---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Codifica els caràcters especials d&#39;acord amb RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Codifica els caràcters especials a l'entrada <code>data</code> d'acord amb les regles d'RFC 3986.


## Examples

### Example #1 
Codifiqueu els caràcters especials a &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
