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

ส่งกลับส่วนของ <code>text</code> หลังจาก <code>delimiter</code> ที่ระบุ    ค่าตัวเลข <code>index</code> ที่เป็นตัวเลือกระบุว่าควรพิจารณาการปรากฏของ <code>delimiter</code> ครั้งใด    รายการ <code>index</code> ที่เป็นตัวเลือกระบุว่าควรพิจารณาการปรากฏของ <code>delimiter</code> ครั้งใด ตลอดจนระบุว่าการทำดัชนีควรทำตั้งแต่จุดเริ่มต้นหรือจุดสิ้นสุดของการป้อนข้อมูล


## Examples

### Example #1 
รับส่วนของ &#34;111-222-333&#34; หลังจากเครื่องหมายยัติภังค์ (แรก)
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
รับส่วนของ &#34;111-222-333&#34; หลังจากเครื่องหมายยัติภังค์ที่สอง
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
รับส่วนของ &#34;111-222-333&#34; หลังจากเครื่องหมายยัติภังค์ที่สองจากตอนท้าย
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
