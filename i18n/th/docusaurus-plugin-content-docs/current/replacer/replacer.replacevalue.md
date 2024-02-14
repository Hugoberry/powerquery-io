---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


แทนที่ค่าภายในค่าที่ป้อนที่ระบุ


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

แทนที่ค่า <code>old</code> ใน <code>value</code> เดิมด้วยค่า <code>new</code> ฟังก์ชันตัวแทนที่นี้สามารถใช้ใน <code>List.ReplaceValue</code> และ <code>Table.ReplaceValue</code> ได้


## Examples

### Example #1 
แทนที่ค่า 11 ด้วยค่า 10
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
