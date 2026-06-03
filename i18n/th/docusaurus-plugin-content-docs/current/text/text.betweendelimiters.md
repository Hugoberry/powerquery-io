---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Remarks

ส่งกลับส่วนของ `text` ระหว่าง `startDelimiter` และ `endDelimiter` ที่ระบุ ค่าตัวเลข `startIndex` ที่เป็นตัวเลือกระบุว่าควรพิจารณาการปรากฏของ `startDelimiter` ครั้งใด รายการ `startIndex` ที่เป็นตัวเลือกระบุว่าควรพิจารณาการปรากฏของ `startDelimiter` ครั้งใด ตลอดจนระบุว่าการทำดัชนีควรทำตั้งแต่จุดเริ่มต้นหรือจุดสิ้นสุดของการป้อนข้อมูล `endIndex` คล้ายกัน เว้นแต่ว่าการทำดัชนีทำขึ้นโดยสัมพันธ์กับ `startIndex`


## Examples

### Example #1
รับส่วนของ "111 (222) 333 (444)" ระหว่างวงเล็บเปิด (แรก) กับวงเล็บปิด (แรก) ที่ตามมา
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
รับส่วนของ "111 (222) 333 (444)" ระหว่างวงเล็บเปิดที่สองกับวงเล็บปิดแรกที่ตามมา
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
รับส่วนของ "111 (222) 333 (444)" ระหว่างวงเล็บเปิดที่สองจากตอนท้ายกับวงเล็บปิดแรกที่ตามมา
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
