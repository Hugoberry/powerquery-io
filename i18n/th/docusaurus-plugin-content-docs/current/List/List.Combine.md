---
title: List.Combine
---

# List.Combine


## Description

ส่งกลับรายการเดียวโดยรวมหลายรายการ


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

ใช้รายการของรายการ <code>lists</code> และรวมเป็นหนึ่งรายการใหม่


## Examples

### Example #1 
รวมสองรายการง่ายๆ \{1, 2} และ \{3, 4}
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
รวมสองรายการ \{1, 2} และ \{3, \{4, 5}} หนึ่งในนั้นจะมีรายการที่ซ้อนกัน
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
