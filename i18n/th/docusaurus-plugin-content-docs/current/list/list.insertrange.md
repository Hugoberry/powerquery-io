---
title: List.InsertRange
---

# List.InsertRange


แทรกค่าลงในรายการที่ดัชนีที่ระบุ


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

ส่งกลับรายการใหม่ที่สร้างโดยการแทรกค่าใน `values` ลงใน `list` ที่ `index` ตำแหน่งแรกในรายการจะอยู่ที่ดัชนี 0

-   `list`: รายการเป้าหมายที่ค่าจะถูกแทรก
-   `index`: ดัชนีของรายการเป้าหมาย(`list`) ที่ค่าจะถูกแทรก ตำแหน่งแรกในรายการจะอยู่ที่ดัชนี 0
-   `values`: รายการค่าที่จะถูกแทรกลงใน `list`


## Examples

### Example #1
แทรกรายการ (\{3, 4\}) ลงในรายการเป้าหมาย (\{1, 2, 5\}) ที่ดัชนี 2
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2
แทรกรายการที่มีรายการที่ซ้อนกัน (\{1, \{1.1, 1.2\}\}) ลงในรายการเป้าหมาย (\{2, 3, 4\}) ที่ดัชนี 0
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
