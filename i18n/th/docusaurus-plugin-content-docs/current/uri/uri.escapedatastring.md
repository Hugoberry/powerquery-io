---
title: Uri.EscapeDataString
---

# Uri.EscapeDataString


เข้ารหัสตัวอักขระพิเศษตามข้อกำหนด RFC 3986


## Syntax

```powerquery
Uri.EscapeDataString(
    data as text
) as text
```


## Remarks

เข้ารหัสตัวอักขระพิเศษในอินพุท <code>data</code> ตามหลักเกณฑ์ของ RFC 3986


## Examples

### Example #1 
เข้ารหัสตัวอักขระพิเศษใน &#34;+money$&#34;
```powerquery
Uri.EscapeDataString("+money$")
```

Result: 
```powerquery
"%2Bmoney%24"
```




## Category
Uri
