---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Codifica i caratteri speciali in base allo standard RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Codifica i caratteri speciali nell'input <code>data</code> in base alle regole dello standard RFC 3986.


## Examples

### Example #1 
Codificare i caratteri speciali in &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
