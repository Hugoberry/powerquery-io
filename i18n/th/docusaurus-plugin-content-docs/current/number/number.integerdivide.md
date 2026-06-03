---
title: Number.IntegerDivide
---

# Number.IntegerDivide


หารสองจำนวนและส่งกลับจำนวนเต็มของผลลัพธ์


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

ส่งคืนจำนวนเต็มของผลลัพธ์จากการหารตัวเลข `number1` โดยตัวเลขอีกตัวหนึ่ง `number2` ถ้า `number1` หรือ `number2` เป็น null `ตัวเลข.หารจำนวนเต็ม` จะส่งคืนค่าเป็น null

-   `number1`: ตัวตั้ง
-   `number2`: ตัวหาร


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
