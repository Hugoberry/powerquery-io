---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

หารสองจำนวนและส่งกลับจำนวนเต็มของผลลัพธ์


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

ส่งคืนจำนวนเต็มของผลลัพธ์จากการหารตัวเลข <code>number1</code> โดยตัวเลขอีกตัวหนึ่ง <code>number2</code>    ถ้า <code>number1</code> หรือ <code>number2</code> เป็น null <code>ตัวเลข.หารจำนวนเต็ม</code> จะส่งคืนค่าเป็น null      <ul>        <li><code>number1</code>: ตัวตั้ง</li>        <li><code>number2</code>: ตัวหาร</li>      </ul>


## Examples

### Example #1 
หาร 6 ด้วย 4
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
หาร 8.3 ด้วย 3
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
