---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Koder specialtegn i overensstemmelse med RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Koder specialtegn i inputtet <code>data</code> i henhold til reglerne i RFC 3986.


## Examples

### Example #1 
Kod specialtegnene i &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
