---
title: List.Buffer
---

# List.Buffer


บัฟเฟอร์รายการ


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Remarks

บัฟเฟอร์รายการ <code>list</code> ในหน่วยความจำ ผลลัพธ์ของการเรียกนี้คือรายการที่เสถียร


## Examples

### Example #1 
สร้างสำเนาที่เสถียรของรายการ \{1..10}
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
