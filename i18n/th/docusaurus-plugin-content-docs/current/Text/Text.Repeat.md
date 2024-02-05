---
title: Text.Repeat
---

# Text.Repeat


## Description

ส่งกลับค่าข้อความที่เรียบเรียงของข้อความป้อนเข้าที่ทำซ้ำตามจำนวนครั้งที่ระบุ


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

ส่งกลับค่าข้อความที่เรียบเรียงของข้อความป้อนเข้า <code>text</code> ที่ทำซ้ำ <code>count</code> ครั้ง


## Examples

### Example #1 
ทำซ้ำข้อความ &#34;a&#34; ห้าครั้ง
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
ทำซ้ำข้อความ &#34;helloworld&#34; สามครั้ง
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
