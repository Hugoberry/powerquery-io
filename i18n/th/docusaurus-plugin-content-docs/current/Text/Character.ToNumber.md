---
title: Character.ToNumber
---

# Character.ToNumber


## Description

แปลงอักขระเป็นค่าตัวเลข


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

ส่งกลับตัวเลขที่เทียบเท่ากับ <code>character</code><br />    <br />    ผลลัพธ์จะเป็นรหัสอักขระ Unicode 21 บิตที่แสดงโดยอักขระที่ระบุหรือคู่ตัวแทน  


## Examples

### Example #1 
แปลงอักขระเป็นค่าตัวเลขที่เทียบเท่ากัน
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
แปลงคู่ตัวแทน UTF-16 สำหรับอีโมติคอน “หน้ายิ้มกริ่ม” เป็นรหัสอักขระฐานสิบหกที่เทียบเท่ากัน
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
