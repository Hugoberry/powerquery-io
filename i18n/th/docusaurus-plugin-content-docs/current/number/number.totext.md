---
title: Number.ToText
---

# Number.ToText


แปลงตัวเลขที่กําหนดให้เป็นข้อความ


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Remarks

แปลงค่าตัวเลข `number` เป็นค่าข้อความตามรูปแบบที่ระบุโดย `format`  
  
รูปแบบคือค่าข้อความที่ระบุวิธีการแปลงตัวเลข สําหรับรายละเอียดเพิ่มเติมเกี่ยวกับค่ารูปแบบที่ได้รับการสนับสนุน ให้ไปที่ https://go.microsoft.com/fwlink/?linkid=2241210 และ https://go.microsoft.com/fwlink/?linkid=2240884  
  
อาจมี `culture` เพิ่มเติม (ตัวอย่างเช่น "en-US") เพื่อควบคุมลักษณะการทํางานที่ขึ้นอยู่กับวัฒนธรรมของ `format`


## Examples

### Example #1
แปลงตัวเลขเป็นข้อความโดยไม่ต้องระบุรูปแบบ
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2
แปลงตัวเลขเป็นรูปแบบเอ็กซ์โพเนนเชียล
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3
แปลงตัวเลขเป็นรูปแบบเปอร์เซ็นต์ที่มีตําแหน่งทศนิยมเพียงตําแหน่งเดียวเท่านั้น
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
