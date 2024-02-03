---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Koodaa erikoismerkit asiakirjan RFC 3986 mukaisesti.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Koodaa erikoismerkit syötteessä <code>data</code> asiakirjan RFC 3986 sääntöjen mukaisesti.


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
