---
title: List.Repeat
---

# List.Repeat


ส่งกลับรายการซึ่งเป็นจำนวนที่ซ้ำกันของรายการเดิม


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

ส่งกลับรายการซึ่งเป็นรายการ <code>count</code> ที่ซ้ำของรายการเดิม <code>list</code>


## Examples

### Example #1 
สร้างรายการที่มี \{1, 2} ที่ถูกทำซ้ำ 3 ครั้ง
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
