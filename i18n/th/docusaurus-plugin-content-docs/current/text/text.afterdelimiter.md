---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

ส่งกลับส่วนของ `text` หลังจาก `delimiter` ที่ระบุ ค่าตัวเลข `index` ที่เป็นตัวเลือกระบุว่าควรพิจารณาการปรากฏของ `delimiter` ครั้งใด รายการ `index` ที่เป็นตัวเลือกระบุว่าควรพิจารณาการปรากฏของ `delimiter` ครั้งใด ตลอดจนระบุว่าการทำดัชนีควรทำตั้งแต่จุดเริ่มต้นหรือจุดสิ้นสุดของการป้อนข้อมูล


## Examples

### Example #1
รับส่วนของ "111-222-333" หลังจากเครื่องหมายยัติภังค์ (แรก)
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2
รับส่วนของ "111-222-333" หลังจากเครื่องหมายยัติภังค์ที่สอง
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3
รับส่วนของ "111-222-333" หลังจากเครื่องหมายยัติภังค์ที่สองจากตอนท้าย
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
