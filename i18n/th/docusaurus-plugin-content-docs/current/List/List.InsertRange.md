---
title: List.InsertRange
---

# List.InsertRange


## Description

แทรกค่าลงในรายการที่ดัชนีที่ระบุ


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

ส่งกลับรายการใหม่ที่สร้างโดยการแทรกค่าใน <code>values</code> ลงใน <code>list</code> ที่ <code>index</code> ตำแหน่งแรกในรายการจะอยู่ที่ดัชนี 0      <ul>        <li><code>list</code>: รายการเป้าหมายที่ค่าจะถูกแทรก</li>        <li><code>index</code>: ดัชนีของรายการเป้าหมาย(<code>list</code>) ที่ค่าจะถูกแทรก ตำแหน่งแรกในรายการจะอยู่ที่ดัชนี 0</li>        <li><code>values</code>: รายการค่าที่จะถูกแทรกลงใน <code>list</code></li>      </ul>


## Examples

### Example #1 
แทรกรายการ (\{3, 4}) ลงในรายการเป้าหมาย (\{1, 2, 5}) ที่ดัชนี 2
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
แทรกรายการที่มีรายการที่ซ้อนกัน (\{1, \{1.1, 1.2}}) ลงในรายการเป้าหมาย (\{2, 3, 4}) ที่ดัชนี 0
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
