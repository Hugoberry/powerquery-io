---
title: List.RemoveRange
---

# List.RemoveRange


## Description

เอาจำนวนนับของค่าออกโดยเริ่มต้นในตำแหน่งที่ระบุ


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

เอาค่า <code>count</code> ใน <code>list</code> ออกโดยเริ่มต้นในตำแหน่งที่ระบุ <code>index</code>


## Examples

### Example #1 
เอา 3 ค่าในรายการออก \{1, 2, 3, 4, -6, -2, -1, 5} โดยเริ่มจากดัชนี 4
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
