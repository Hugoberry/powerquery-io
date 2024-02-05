---
title: Number.Mod
---

# Number.Mod


## Description

จำนวนเต็มหารสองจำนวนและส่งกลับเศษที่เหลือ


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

ส่งคืนเศษที่เหลือที่เป็นผลจากการหารจำนวนเต็ม <code>number</code> ด้วย <code>divisor</code>     ถ้า <code>number</code> หรือ <code>divisor</code> เป็น null <code>ตัวเลข.Mod</code> จะส่งคืนค่าเป็น null      <ul>        <li><code>number</code>: ตัวตั้ง</li>        <li><code>divisor</code>: ตัวหาร</li>      </ul>


## Examples

### Example #1 
หาเศษที่เหลือเมื่อคุณหาร 5 ด้วย 3
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
