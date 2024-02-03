---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

แทนที่ข้อความภายในค่าที่ป้อนที่ระบุ


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

แทนที่ข้อความ <code>old</code> ใน <code>text</code> เดิมด้วยข้อความ <code>new</code> ฟังก์ชันตัวแทนที่นี้สามารถใช้ใน <code>List.ReplaceValue</code> และ <code>Table.ReplaceValue</code> ได้


## Examples

### Example #1 
แทนที่ข้อความ &#34;hE&#34; ด้วย &#34;He&#34; ในสตริง &#34;hEllo world&#34;
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
