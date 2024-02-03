---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

A különleges karaktereket az RFC 3986 szabványnak megfelelően kódolja.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

A(z) <code>data</code> bemenetben szereplő különleges karaktereket az RFC 3986 szabvány szabályainak megfelelően kódolja.


## Examples

### Example #1 
A &#34;+money$&#34; kifejezésben szereplő különleges karakterek kódolása.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
