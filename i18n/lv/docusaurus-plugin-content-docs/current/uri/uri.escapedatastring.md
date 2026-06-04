---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Kodē speciālās rakstzīmes saskaņā ar RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Kodē speciālās rakstzīmes ievadē `data` saskaņā ar RFC 3986 noteikumiem.


## Examples

### Example #1
Kodējiet "+money$" speciālās rakstzīmes.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
