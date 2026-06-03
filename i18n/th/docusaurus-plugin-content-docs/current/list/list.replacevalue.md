---
title: List.ReplaceValue
---

# List.ReplaceValue


ค้นหารายการสำหรับค่าที่ระบุและแทนที่ค่านั้น


## Syntax

```powerquery
List.ReplaceValue(
    list as list,
    oldValue as any,
    newValue as any,
    replacer as function
) as list
```


## Remarks

ค้นหารายการของค่า `list` สำหรับค่า `oldValue` และแทนที่การปรากฏแต่ละรายการด้วยค่าการแทนที่ `newValue`


## Examples

### Example #1
แทนที่ค่า "a" ทั้งหมดในรายการ \{"a", "B", "a", "a"\} ด้วย "A"
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
