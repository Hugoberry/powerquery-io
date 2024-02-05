---
title: Single.From
---

# Single.From


## Description

สร้าง Single จากค่าที่กำหนดไว้


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

ส่งกลับค่า <code>number</code> ที่เป็นตัวเลขเดียวจาก <code>value</code> ที่กำหนด ถ้า <code>value</code> ที่กำหนดเป็น <code>null</code> <code>Single.From</code> จะส่งกลับ <code>null</code> ถ้า <code>value</code> ที่กำหนดเป็น <code>number</code> ภายในช่วงที่เป็นตัวเลขเดียว ระบบจะส่งกลับ <code>value</code> มิฉะนั้นจะส่งกลับข้อผิดพลาด ถ้า <code>value</code> เป็นชนิดอื่น ระบบจะแปลงเป็น <code>number</code> ก่อน โดยใช้ <code>Number.FromText</code> อาจมี <code>culture</code> เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1 
รับค่า &lt;code&gt;ตัวเลข&lt;/code&gt; ที่เป็น Single สำหรับ &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
