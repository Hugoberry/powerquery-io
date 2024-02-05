---
title: Percentage.From
---

# Percentage.From


## Description

ส่งกลับค่าเปอร์เซ็นต์จากค่าที่กำหนด


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

ส่งกลับค่า <code>percentage</code> จาก <code>value</code>ที่กำหนด ถ้า <code>value</code> ที่กำหนดเป็น <code>null</code> <code>Percentage.From</code> จะส่งกลับ <code>null</code>  ถ้า <code>value</code> ที่กำหนดเป็น <code>text</code> ที่มีสัญลักษณ์เปอร์เซ็นต์ต่อท้าย ระบบจะส่งกลับตัวเลขทศนิยมที่แปลงแล้ว มิฉะนั้นจะแปลงค่าเป็น <code>number</code> โดยใช้ <code>Number.From</code> อาจมี <code>culture</code> เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1 
รับค่า&lt;code&gt;เปอร์เซ็นต์&lt;/code&gt;ของ &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
