---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


Mã hóa các ký tự đặc biệt theo RFC 3986.


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

Mã hóa các ký tự đặc biệt trong đầu vào <code>data</code> theo các quy tắc RFC 3986.


## Examples

### Example #1 
Mã hóa các ký tự đặc biệt trong &#34;+money$&#34;.
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
