---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


RFC 3986 стандартына сәйкес арнайы таңбаларды кодтайды.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

`data` енгізуіндегі арнайы таңбаларды RFC 3986 стандартына сәйкес кодтайды.


## Examples

### Example #1
"+money$" ішіндегі арнайы таңбаларды кодтайды.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
