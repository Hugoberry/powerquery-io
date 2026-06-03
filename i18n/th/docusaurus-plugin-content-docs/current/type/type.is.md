---
title: Type.Is
---

# Type.Is


กําหนดว่าค่าของชนิดแรกเข้ากันได้กับชนิดที่สองเสมอหรือไม่


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

กําหนดว่าค่าของ `type1` เข้ากันได้กับ `type2` เสมอหรือไม่ พารามิเตอร์ `type2` ควรเป็นค่าชนิด (หรือ primitive) ที่เป็นค่าว่างได้ มิฉะนั้น ลักษณะการทํางานของฟังก์ชันนี้ไม่ได้รับการกําหนดและไม่ควรใช้


## Examples

### Example #1
กําหนดว่าค่าของชนิดตัวเลขสามารถถือว่าเป็นชนิดใดๆ ได้เสมอหรือไม่
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
กําหนดว่าค่าของชนิดใดๆ สามารถถือว่าเป็นหมายเลขชนิดได้เสมอหรือไม่
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
