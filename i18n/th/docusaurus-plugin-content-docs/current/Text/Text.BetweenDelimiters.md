---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


## Description

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


## Details

ส่งกลับส่วนของ <code>text</code> ระหว่าง <code>startDelimiter</code> และ <code>endDelimiter</code> ที่ระบุ    ค่าตัวเลข <code>startIndex</code> ที่เป็นตัวเลือกระบุว่าควรพิจารณาการปรากฏของ <code>startDelimiter</code> ครั้งใด    รายการ <code>startIndex</code> ที่เป็นตัวเลือกระบุว่าควรพิจารณาการปรากฏของ <code>startDelimiter</code> ครั้งใด ตลอดจนระบุว่าการทำดัชนีควรทำตั้งแต่จุดเริ่มต้นหรือจุดสิ้นสุดของการป้อนข้อมูล    <code>endIndex</code> คล้ายกัน เว้นแต่ว่าการทำดัชนีทำขึ้นโดยสัมพันธ์กับ <code>startIndex</code>


## Examples

### Example #1 
รับส่วนของ &#34;111 (222) 333 (444)&#34; ระหว่างวงเล็บเปิด (แรก) กับวงเล็บปิด (แรก) ที่ตามมา
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
รับส่วนของ &#34;111 (222) 333 (444)&#34; ระหว่างวงเล็บเปิดที่สองกับวงเล็บปิดแรกที่ตามมา
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
รับส่วนของ &#34;111 (222) 333 (444)&#34; ระหว่างวงเล็บเปิดที่สองจากตอนท้ายกับวงเล็บปิดแรกที่ตามมา
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
