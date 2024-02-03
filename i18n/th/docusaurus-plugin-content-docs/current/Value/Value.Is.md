---
title: Value.Is
---

# Value.Is


## Description

กําหนดว่าค่าสามารถเข้ากันได้กับชนิดที่ระบุหรือไม่


## Syntax

```powerquery
Value.Is(
    value as any,
    type as type
) as logical
```


## Details

กําหนดว่าค่าสามารถเข้ากันได้กับชนิดที่ระบุหรือไม่ ซึ่งเทียบเท่ากับตัวดําเนินการ "is" ใน M โดยมีข้อยกเว้นว่าสามารถยอมรับการอ้างอิงชนิดตัวระบุได้ เช่น Number.Type


## Examples

### Example #1 
เปรียบเทียบสองวิธีในการกำหนดว่าตัวเลขเข้ากันได้กับหมายเลขชนิดหรือไม่
```powerquery
Value.Is(123, Number.Type) = (123 is number)
```

Result: 
```powerquery
true
```




## Category
Values.Types
