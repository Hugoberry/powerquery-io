---
title: Value.As
---

# Value.As


## Description

ส่งกลับค่าถ้าเข้ากันได้กับชนิดที่ระบุ


## Syntax

```powerquery
Value.As(
    value as any,
    type as type
) as any
```


## Details

ส่งกลับค่าถ้าเข้ากันได้กับชนิดที่ระบุ ซึ่งเทียบเท่ากับตัวดําเนินการ "as" ใน M โดยมีข้อยกเว้นที่สามารถยอมรับการอ้างอิงชนิดตัวระบุได้ เช่น Number.Type


## Examples

### Example #1 
แปลงตัวเลขเป็นตัวเลข
```powerquery
Value.As(123, Number.Type)
```

Result: 
```powerquery
123
```


### Example #2 
พยายามแปลงค่าข้อความเป็นตัวเลข
```powerquery
Value.As("abc", type number)
```

Result: 
```powerquery
[Expression.Error] We cannot convert the value "abc" to type Number.
```




## Category
Values.Types
