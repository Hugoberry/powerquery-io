---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


## Description

Кодирует специальные символы в соответствии с RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Details

Кодирует специальные символы во входных данных <code>data</code> в соответствии с правилами RFC 3986.


## Examples

### Example #1 
Закодируйте специальные символы в &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
