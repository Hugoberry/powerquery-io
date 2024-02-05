---
title: Logical.From
---

# Logical.From


## Description

สร้างตรรกะจากค่าที่กำหนด


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

ส่งกลับค่า <code>logical</code> จาก <code>value</code> ที่กำหนด ถ้า <code>value</code> ที่กำหนดเป็น <code>null</code> <code>Logical.From</code> จะส่งกลับ <code>null</code>  ถ้า <code>value</code> ที่กำหนดเป็น <code>logical</code> จะมีการส่งกลับ <code>value</code> ค่าของชนิดต่อไปนี้สามารถแปลงเป็นค่า <code>logical</code> ได้:      <ul>        <li><code>text</code>: ค่า <code>logical</code> จากค่าข้อความ ซึ่งเป็น <code>"true"</code> หรือ <code>"false"</code> ดู <code>Logical.FromText</code> สำหรับรายละเอียด</li>        <li><code>number</code>: <code>false</code> ถ้า <code>value</code> เท่ากับ <code>0</code> และ <code>true</code> ถ้าไม่ใช่</li>      </ul>ถ้า <code>value</code> เป็นชนิดอื่น ระบบจะส่งกลับข้อผิดพลาด


## Examples

### Example #1 
แปลง &lt;code&gt;2&lt;/code&gt; เป็นค่า &lt;code&gt;logical&lt;/code&gt;
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
