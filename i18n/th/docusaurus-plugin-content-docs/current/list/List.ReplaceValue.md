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

ค้นหารายการของค่า <code>list</code> สำหรับค่า <code>oldValue</code> และแทนที่การปรากฏแต่ละรายการด้วยค่าการแทนที่ <code>newValue</code>


## Examples

### Example #1 
แทนที่ค่า &#34;a&#34; ทั้งหมดในรายการ \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} ด้วย &#34;A&#34;
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
