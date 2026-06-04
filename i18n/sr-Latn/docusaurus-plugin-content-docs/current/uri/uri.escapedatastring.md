---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Kodira specijalne znakove u skladu sa standardom RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Kodira specijalne znakove u unosu `data` u skladu sa pravilima standarda RFC 3986.


## Examples

### Example #1
Kodira specijalne znakove u okviru "+money$".
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
