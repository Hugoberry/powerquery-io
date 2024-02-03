---
title: Uri.Parts
---

# Uri.Parts


## Description

ส่งกลับส่วนประกอบของ URI แบบสัมบูรณ์ของค่าที่ป้อนเป็นระเบียน


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

ส่งกลับส่วนประกอบของค่าที่ป้อน <code>absoluteUri</code> เป็นระเบียนที่ประกอบด้วยค่า เช่น แบบแผน, โฮสต์, พอร์ต, เส้นทาง, แบบสอบถาม, ส่วนย่อย, ชื่อผู้ใช้ และ รหัสผ่าน


## Examples

### Example #1 
ค้นหาส่วนประกอบของ URI แบบสัมบูรณ์ &#34;www.adventure-works.com&#34;
```powerquery
Uri.Parts("www.adventure-works.com")
```

Result: 
```powerquery
[
    Scheme = "http",
    Host = "www.adventure-works.com",
    Port = 80,
    Path = "/",
    Query = [],
    Fragment = "",
    UserName = "",
    Password = ""
]
```


### Example #2 
ถอดรหัสสตริงที่เข้ารหัสเปอร์เซ็นต์
```powerquery
let
    UriUnescapeDataString = (data as text) as text => Uri.Parts("http://contoso?a=" & data)[Query][a]
in
    UriUnescapeDataString("%2Bmoney%24")
```

Result: 
```powerquery
"+money$"
```




## Category
Uri
