---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


A különleges karaktereket az RFC 3986 szabványnak megfelelően kódolja.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

A(z) `data` bemenetben szereplő különleges karaktereket az RFC 3986 szabvány szabályainak megfelelően kódolja.


## Examples

### Example #1
A "+money$" kifejezésben szereplő különleges karakterek kódolása.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
