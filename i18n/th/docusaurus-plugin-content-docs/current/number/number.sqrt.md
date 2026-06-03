---
title: Number.Sqrt
---

# Number.Sqrt


ส่งกลับรากที่สองของตัวเลข


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

ส่งคืนรากที่สองของ `number` ถ้า `number` เป็น null `ตัวเลข.Sqrt` จะส่งคืนค่า null ถ้าเป็นค่าลบ จะมีการส่งคืน `ตัวเลข.NaN` (ไม่ใช่ตัวเลข)


## Examples

### Example #1
หารากที่สองของ 625
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
หารากที่สองของ 85
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
