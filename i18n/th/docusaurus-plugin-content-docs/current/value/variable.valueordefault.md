---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


ส่งกลับค่าของตัวแปรที่ระบุหรือค่าเริ่มต้นถ้าไม่ได้กําหนดตัวแปร


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

ส่งกลับค่าของตัวแปรที่ระบุ `identifier` ที่กำหนดโดยสภาพแวดล้อมการประเมินปัจจุบัน หากตัวแปรไม่ได้กำหนด จะมีการส่งกลับ `defaultValue` ที่เลือกได้



## Category
Values.Implementation
