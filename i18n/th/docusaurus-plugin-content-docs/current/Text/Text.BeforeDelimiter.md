---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


## Description

Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

ส่งกลับส่วนของ <code>text</code> ก่อน <code>delimiter</code> ที่ระบุ    ค่าตัวเลข <code>index</code> ที่เป็นตัวเลือกระบุว่าควรพิจารณาการปรากฏของ <code>delimiter</code> ครั้งใด    รายการ <code>index</code> ที่เป็นตัวเลือกระบุว่าควรพิจารณาการปรากฏของ <code>delimiter</code> ครั้งใด ตลอดจนระบุว่าการทำดัชนีควรทำตั้งแต่จุดเริ่มต้นหรือจุดสิ้นสุดของการป้อนข้อมูล


## Examples

### Example #1 
รับส่วนของ &#34;111-222-333&#34; ก่อนเครื่องหมายยัติภังค์ (แรก)
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
รับส่วนของ &#34;111-222-333&#34; ก่อนเครื่องหมายยัติภังค์ที่สอง
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
รับส่วนของ &#34;111-222-333&#34; ก่อนเครื่องหมายยัติภังค์ที่สองจากตอนท้าย
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
