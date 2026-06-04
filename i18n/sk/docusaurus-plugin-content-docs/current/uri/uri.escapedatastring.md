---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Kóduje špeciálne znaky podľa štandardu RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Kóduje špeciálne znaky v rámci vstupu `data` podľa pravidiel štandardu RFC 3986.


## Examples

### Example #1
Kóduje špeciálne znaky: "+money$".
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
