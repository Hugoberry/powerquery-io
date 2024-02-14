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

ส่งคืนรากที่สองของ <code>number</code>     ถ้า <code>number</code> เป็น null <code>ตัวเลข.Sqrt</code> จะส่งคืนค่า null ถ้าเป็นค่าลบ จะมีการส่งคืน <code>ตัวเลข.NaN</code> (ไม่ใช่ตัวเลข)


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
