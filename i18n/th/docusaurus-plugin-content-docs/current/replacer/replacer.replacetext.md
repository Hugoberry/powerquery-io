---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


แทนที่ข้อความภายในค่าที่ป้อนที่ระบุ


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

แทนที่ข้อความ `old` ใน `text` เดิมด้วยข้อความ `new` ฟังก์ชันตัวแทนที่นี้สามารถใช้ใน `List.ReplaceValue` และ `Table.ReplaceValue` ได้


## Examples

### Example #1
แทนที่ข้อความ "hE" ด้วย "He" ในสตริง "hEllo world"
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
