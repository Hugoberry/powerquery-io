---
title: Double.From
---

# Double.From


## Description

สร้าง Double จากค่าที่กำหนดไว้


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

ส่งกลับค่า <code>number</code> ที่เป็นสองเท่าจาก <code>value</code> ที่กำหนด ถ้า <code>value</code> ที่กำหนดเป็น <code>null</code> <code>Double.From</code> จะส่งกลับ <code>null</code> ถ้า <code>value</code> ที่กำหนดเป็น <code>number</code> ภายในช่วงที่เป็นสองเท่า ระบบจะส่งกลับ <code>value</code> มิฉะนั้นจะส่งกลับข้อผิดพลาด ถ้า <code>value</code> เป็นชนิดอื่น ระบบจะแปลงเป็น <code>number</code> ก่อน โดยใช้ <code>Number.FromText</code> อาจมี <code>culture</code> เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1 
รับค่า &lt;code&gt;ตัวเลข&lt;/code&gt; ที่เป็น Double สำหรับ &lt;code&gt;&#34;4&#34;&lt;/code&gt;
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
