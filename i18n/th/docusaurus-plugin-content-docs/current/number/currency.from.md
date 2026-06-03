---
title: Currency.From
---

# Currency.From


ย้อนค่าสกุลเงินจากค่าที่ให้


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

ส่งกลับค่า `currency` จาก `value` ที่กำหนด ถ้า `value` ที่กำหนดเป็น `null` `Currency.From` จะส่งกลับ `null` ถ้า `value` ที่กำหนดเป็น `number` ภายในช่วงของสกุลเงิน ระบบจะปัดเศษส่วนของ `value` เป็นทศนิยม 4 หลักและส่งกลับ ถ้า `value` เป็นชนิดอื่น ระบบจะแปลงเป็น `number` โดยใช้ `Number.FromText` ช่วงที่ถูกต้องสําหรับสกุลเงินคือ `-922,337,203,685,477.5808` ถึง `922,337,203,685,477.5807` โปรดดู `Number.Round` สําหรับโหมดการปัดเศษที่ใช้งานได้ ค่าเริ่มต้นคือ `RoundingMode.ToEven` อาจมี `culture` เพิ่มเติม (ตัวอย่างเช่น "en-US")


## Examples

### Example #1
รับค่า `สกุลเงิน` ของ`"1.23455"`
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
รับค่า `สกุลเงิน` ของ `"1.23455"` โดยใช้ `RoundingMode.Down`
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
