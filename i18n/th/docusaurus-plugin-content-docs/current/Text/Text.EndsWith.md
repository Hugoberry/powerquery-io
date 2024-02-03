---
title: Text.EndsWith
---

# Text.EndsWith


## Description

ระบุว่าข้อความสิ้นสุดด้วยค่าที่ระบุหรือไม่


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

ระบุว่าข้อความที่ให้ไว้ <code>text</code> ลงท้ายด้วยค่าที่ระบุไว้ <code>substring</code> หรือไม่ ค่าที่บ่งชี้จะต้องตรงตามตัวพิมพ์ใหญ่-เล็ก      <div>        <code>comparer</code> คือ <code>ตัวเปรียบเทียบ</code> ซึ่งใช้สำหรับควบคุมการเปรียบเทียบ สามารถใช้ตัวเปรียบเทียบในการเปรียบเทียบแบบไม่เทียบตรงตามตัวพิมพ์ใหญ่-เล็กหรือตามวัฒนธรรมและตามการรับรู้ภาษา      </div>      <div>        สามารถเลือกใช้งานรุ่นในตัวเปรียบเทียบดังต่อไปนี้ในภาษาสำหรับสูตร:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: ใช้สำหรับการเปรียบเทียบตามเลขลำดับที่ตรงกัน</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: ใช้สำหรับการเปรียบเทียบเลขลำดับแบบไม่เทียบตรงตามตัวพิมพ์ใหญ่-เล็ก</li>        <li> <code>Comparer.FromCulture</code>: ใช้สำหรับการเปรียบเทียบตามการรับรู้วัฒนธรรม</li>      </ul>


## Examples

### Example #1 
ตรวจสอบว่า &#34;Hello, World&#34; สิ้นสุดด้วย &#34;world&#34; หรือไม่
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
ตรวจสอบว่า &#34;Hello, World&#34; สิ้นสุดด้วย &#34;World&#34; หรือไม่
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
