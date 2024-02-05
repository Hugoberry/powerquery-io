---
title: Text.StartsWith
---

# Text.StartsWith


## Description

ระบุว่าข้อความเริ่มต้นด้วยค่าที่ระบุหรือไม่


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

ส่งคืน จริง หากค่าข้อความ <code>text</code> เริ่มต้นด้วยค่าข้อความ <code>substring</code>      <ul>        <li><code>text</code>: <i></i> ค่า <code>ข้อความ</code> ที่จะใช้ในการค้นหา</li>        <li><code>substring</code>: <i></i> ค่า <code>ข้อความ</code> ซึ่งเป็นสตริงย่อยที่จะใช้ในการค้นหาใน <code>substring</code></li>        <li><code>comparer</code>: <i>[ระบุหรือไม่ก็ได้]</i> <code>ตัวเปรียบเทียบ</code> ซึ่งใช้สำหรับควบคุมการเปรียบเทียบ ตัวอย่างเช่น อาจใช้ <code>ตัวเปรียบเทียบ.เลขลำดับละเว้นตัวพิมพ์ใหญ่-เล็ก</code> ในการค้นหาแบบไม่เทียบตรงตามตัวพิมพ์ใหญ่-เล็ก</li>      </ul>      <div>        <code>comparer</code> คือ <code>ตัวเปรียบเทียบ</code> ซึ่งใช้สำหรับควบคุมการเปรียบเทียบ สามารถใช้ตัวเปรียบเทียบในการเปรียบเทียบแบบไม่เทียบตรงตามตัวพิมพ์ใหญ่-เล็กหรือตามวัฒนธรรมและตามที่กำหนดไว้ในท้องถิ่น      </div>      <div>        สามารถเลือกใช้งานตัวเปรียบเทียบที่มีในตัวดังต่อไปนี้ในภาษาสำหรับสูตร:      </div>      <ul>        <li><code>ตัวเปรียบเทียบ.เลขลำดับ</code>: ใช้สำหรับการเปรียบเทียบตามเลขลำดับที่ตรงกัน</li>        <li><code>ตัวเปรียบเทียบ.เลขลำดับละเว้นตัวพิมพ์ใหญ่-เล็ก</code>: ใช้สำหรับการเปรียบเทียบเลขลำดับแบบไม่เทียบตรงตามตัวพิมพ์ใหญ่-เล็ก</li>        <li> <code>ตัวเปรียบเทียบ.จากวัฒนธรรม</code>: ใช้สำหรับการเปรียบเทียบตามวัฒนธรรม</li>      </ul>


## Examples

### Example #1 
ตรวจสอบว่าข้อความ &#34;Hello, World&#34; ขึ้นต้นด้วยข้อความ &#34;hello&#34; หรือไม่
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
ตรวจสอบว่าข้อความ &#34;Hello, World&#34; ขึ้นต้นด้วยข้อความ &#34;Hello&#34; หรือไม่
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
