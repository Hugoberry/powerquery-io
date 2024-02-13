---
title: Int8.From
---

# Int8.From


สร้างจำนวนเต็ม 8 บิตที่มีเครื่องหมายจากค่าที่กำหนดไว้


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

ส่งกลับค่า <code>number</code> จํานวนเต็ม 8 บิตที่มีเครื่องหมายจาก <code>value</code> ที่กำหนด ถ้า <code>value</code> ที่กำหนดเป็น <code>null</code> <code>Int8.From</code> จะส่งกลับ <code>null</code> ถ้า <code>value</code> ที่กำหนดเป็น <code>number</code> ภายในช่วงของจํานวนเต็ม 8 บิตที่มีเครื่องหมายโดยไม่มีเศษส่วน ระบบจะส่งกลับ <code>value</code> ถ้ามีเศษส่วน ระบบจะปัดเศษตัวเลขดังกล่าวตามโหมดการปัดเศษที่ระบุไว้ โหมดการปัดเศษเริ่มต้นคือ <code>RoundingMode.ToEven</code> ถ้า <code>value</code> เป็นชนิดอื่น ระบบจะแปลงเป็น <code>number</code> ก่อน โดยใช้ <code>Number.FromText</code> โปรดดู <code>Number.Round</code> สําหรับโหมดการปัดเศษที่ใช้งานได้ อาจมี <code>culture</code> เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1 
รับค่า &lt;code&gt;ตัวเลข&lt;/code&gt; ที่เป็นจำนวนเต็ม 8 บิตที่มีเครื่องหมายสำหรับ &lt;code&gt;&#34;4&#34;&lt;/code&gt;
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
รับค่า &lt;code&gt;ตัวเลข&lt;/code&gt; ที่เป็นจำนวนเต็ม 8 บิตที่มีเครื่องหมายสำหรับ &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; โดยใช้ &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
