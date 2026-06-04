---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Kóduje speciální znaky podle RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Kóduje speciální znaky ve vstupu `data` podle pravidel RFC 3986.


## Examples

### Example #1
Kóduje speciální znaky v řetězci "+money$".
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
