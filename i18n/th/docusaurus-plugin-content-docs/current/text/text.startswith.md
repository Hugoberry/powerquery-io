---
title: Text.StartsWith
---

# Text.StartsWith


ระบุว่าข้อความเริ่มต้นด้วยค่าที่ระบุหรือไม่


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

ส่งคืน true หากค่าข้อความ `text` เริ่มต้นด้วยค่าข้อความ `substring`

-   `text`: ค่า `ข้อความ` ที่จะใช้ในการค้นหา
-   `substring`: ค่า `text` ซึ่งเป็นสตริงย่อยที่จะใช้ในการค้นหาใน `text`.
-   `comparer`: *(ไม่บังคับ)* `Comparer` ใช้สำหรับควบคุมการเปรียบเทียบ ตัวอย่างเช่น สามารถใช้ `Comparer.OrdinalIgnoreCase` เพื่อทำการค้นหาแบบไม่คำนึงถึงตัวพิมพ์ใหญ่เล็กได้

`comparer` เป็น `Comparer` ซึ่งใช้ควบคุมการเปรียบเทียบของตัวเปรียบเทียบสามารถใช้ในการเปรียบเทียบแบบไม่คำนึงถึงตัวพิมพ์ใหญ่เล็ก หรือแบบคำนึงถึงรูปแบบและภาษาท้องถิ่นได้

ตัวเปรียบเทียบที่มีอยู่แล้วภายในต่อไปนี้พร้อมใช้งานในภาษาสูตร:

-   `Comparer.Ordinal`: ใช้สำหรับการเปรียบเทียบตามเลขลำดับที่ตรงกัน
-   `Comparer.OrdinalIgnoreCase`: ใช้สำหรับการเปรียบเทียบแบบไม่ตรงตามตัวพิมพ์ใหญ่-เล็กตามเลขลำดับที่ตรงกัน
-   `Comparer.FromCulture`: ใช้สำหรับการเปรียบเทียบตามรูปแบบ


## Examples

### Example #1
ตรวจสอบว่าข้อความ "Hello, World" ขึ้นต้นด้วยข้อความ "hello" หรือไม่
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
ตรวจสอบว่าข้อความ "Hello, World" ขึ้นต้นด้วยข้อความ "Hello" หรือไม่
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
ละเว้นกรณี ตรวจสอบว่าข้อความ "สวัสดี ทุกท่าน" เริ่มต้นด้วยข้อความ "สวัสดี" หรือไม่
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
