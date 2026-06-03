---
title: Text.EndsWith
---

# Text.EndsWith


ระบุว่าข้อความสิ้นสุดด้วยค่าที่ระบุหรือไม่


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

ระบุว่าข้อความที่ให้ไว้ `text` ลงท้ายด้วยค่าที่ระบุไว้ `substring` หรือไม่ ค่าที่บ่งชี้จะต้องตรงตามตัวพิมพ์ใหญ่-เล็ก

`comparer` คือ `ตัวเปรียบเทียบ` ซึ่งใช้สำหรับควบคุมการเปรียบเทียบ สามารถใช้ตัวเปรียบเทียบในการเปรียบเทียบแบบไม่เทียบตรงตามตัวพิมพ์ใหญ่-เล็กหรือตามวัฒนธรรมและตามการรับรู้ภาษา

สามารถเลือกใช้งานรุ่นในตัวเปรียบเทียบดังต่อไปนี้ในภาษาสำหรับสูตร:

-   `Comparer.Ordinal`: ใช้สำหรับการเปรียบเทียบตามเลขลำดับที่ตรงกัน
-   `Comparer.OrdinalIgnoreCase`: ใช้สำหรับการเปรียบเทียบเลขลำดับแบบไม่เทียบตรงตามตัวพิมพ์ใหญ่-เล็ก
-   `Comparer.FromCulture`: ใช้สำหรับการเปรียบเทียบตามการรับรู้วัฒนธรรม


## Examples

### Example #1
ตรวจสอบว่า "Hello, World" สิ้นสุดด้วย "world" หรือไม่
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
ตรวจสอบว่า "Hello, World" สิ้นสุดด้วย "World" หรือไม่
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
