---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Кодирует специальные символы в соответствии с RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Кодирует специальные символы во входных данных `data` в соответствии с правилами RFC 3986.


## Examples

### Example #1
Закодируйте специальные символы в "+money$".
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
