---
title: Uri.BuildQueryString
---

# Uri.BuildQueryString


รวมข้อมูลบันทึกเข้าไว้ในสตริงแบบสอบถาม URI


## Syntax

```powerquery
Uri.BuildQueryString(
    query as record
) as text
```


## Remarks

รวมข้อมูลบันทึก <code>query</code> เข้าไว้ในสตริงแบบสอบถาม URI โดยจะต้องใช้ตัวอักขระพิเศษ


## Examples

### Example #1 
เข้ารหัสสตริงแบบสอบถามที่มีตัวอักขระพิเศษ
```powerquery
Uri.BuildQueryString([a = "1", b = "+$"])
```

Result: 
```powerquery
"a=1&b=%2B%24"
```




## Category
Uri
