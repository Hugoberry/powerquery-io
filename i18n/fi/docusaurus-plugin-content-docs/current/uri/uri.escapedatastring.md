---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Koodaa erikoismerkit asiakirjan RFC 3986 mukaisesti.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Koodaa erikoismerkit syötteessä `data` asiakirjan RFC 3986 sääntöjen mukaisesti.


## Examples

### Example #1
Koodaa erikoismerkit kohteessa +money$.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
