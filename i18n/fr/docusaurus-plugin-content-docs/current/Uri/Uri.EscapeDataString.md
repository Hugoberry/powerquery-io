---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Encode les caractères spéciaux conformément à la spécification RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Encode les caractères spéciaux dans l'entrée <code>data</code> conformément aux règles de la spécification RFC 3986.


## Examples

### Example #1 
Encode les caractères spéciaux dans &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
