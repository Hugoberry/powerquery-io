---
title: List.ReplaceRange
---

# List.ReplaceRange


แทนที่จำนวนนับของค่าโดยเริ่มต้นในตำแหน่งที่มีค่าการแทนที่


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Remarks

แทนที่ค่า <code>count</code> ใน <code>list</code> ด้วยรายการ <code>replaceWith</code> โดยเริ่มต้นในตำแหน่งที่ระบุ <code>index</code>


## Examples

### Example #1 
แทนที่ \{7, 8, 9} ในรายการ \{1, 2, 7, 8, 9, 5} ด้วย \{3, 4}
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
