---
title: Currency.From
---

# Currency.From


## Description

ย้อนค่าสกุลเงินจากค่าที่ให้


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

ส่งกลับค่า <code>currency</code> จาก <code>value</code> ที่กำหนด ถ้า <code>value</code> ที่กำหนดเป็น <code>null</code> <code>Currency.From</code> จะส่งกลับ <code>null</code>  ถ้า <code>value</code> ที่กำหนดเป็น <code>number</code> ภายในช่วงของสกุลเงิน ระบบจะปัดเศษส่วนของ <code>value</code> เป็นทศนิยม 4 หลักและส่งกลับ ถ้า <code>value</code> เป็นชนิดอื่น ระบบจะแปลงเป็น <code>number</code> โดยใช้ <code>Number.FromText</code> ช่วงที่ถูกต้องสําหรับสกุลเงินคือ <code>-922,337,203,685,477.5808</code> ถึง <code>922,337,203,685,477.5807</code> โปรดดู <code>Number.Round</code> สําหรับโหมดการปัดเศษที่ใช้งานได้ ค่าเริ่มต้นคือ <code>RoundingMode.ToEven</code> อาจมี <code>culture</code> เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1 
รับค่า &lt;code&gt;สกุลเงิน&lt;/code&gt; ของ&lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
รับค่า &lt;code&gt;สกุลเงิน&lt;/code&gt; ของ &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; โดยใช้ &lt;code&gt;RoundingMode.Down&lt;/code&gt;
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
