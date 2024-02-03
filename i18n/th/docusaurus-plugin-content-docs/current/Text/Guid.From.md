---
title: Guid.From
---

# Guid.From


## Description

ส่งกลับค่า guid จากค่าที่กำหนด


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

ส่งกลับค่า <code>Guid.Type</code> จาก <code>value</code> ที่กำหนด ถ้า <code>value</code> ที่กำหนดเป็น <code>null</code> <code>Guid.From</code> จะส่งกลับค่า <code>null</code>  จะมีดำเนินการตรวจสอบเพื่อกำหนดว่า <code>value</code> ที่กำหนดอยู่ในรูปแบบที่ยอมรับได้หรือไม่ รูปแบบที่ยอมรับได้มีอยู่ในตัวอย่าง


## Examples

### Example #1 
สามารถระบุ Guid เป็นเลขฐานสิบหกที่ติดกัน 32 หลัก
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
Guid สามารถระบุเป็นเลขฐานสิบหก 32 หลักที่คั่นด้วยเครื่องหมายยัติภังค์ลงในบล็อกของ 8-4-4-4-12
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
Guid สามารถระบุเป็นเลขฐานสิบหก 32 หลักที่คั่นด้วยเครื่องหมายยัติภังค์และล้อมรอบด้วยวงเล็บปีกกา
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
Guid สามารถระบุเป็นเลขฐานสิบหก 32 หลักที่คั่นด้วยเครื่องหมายยัติภังค์และล้อมรอบด้วยวงเล็บ
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
