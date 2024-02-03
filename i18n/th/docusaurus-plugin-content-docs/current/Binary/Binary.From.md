---
title: Binary.From
---

# Binary.From


## Description

สร้างไบนารีจากค่าที่กำหนด


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

ส่งกลับค่า <code>binary</code> จาก <code>value</code> ที่กำหนด ถ้า <code>value</code> ที่กำหนดให้เป็น <code>null</code> <code>Binary.From</code> จะส่งกลับ <code>null</code>  ถ้า <code>value</code> ที่กำหนดให้เป็น <code>binary</code> จะมีการส่งกลับ <code>value</code> ค่าของชนิดต่อไปนี้สามารถแปลงเป็นค่า <code>binary</code> ได้:      <ul>        <li><code>text</code>: ค่า <code>binary</code> จากการแสดงข้อความ ดู <code>Binary.FromText</code> สำหรับรายละเอียด</li>      </ul>ถ้า <code>value</code> เป็นชนิดอื่น ระบบจะส่งกลับข้อผิดพลาด


## Examples

### Example #1 
รับค่า &lt;code&gt;binary&lt;/code&gt; ของ &lt;code&gt;&#34;1011&#34;&lt;/code&gt;
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
