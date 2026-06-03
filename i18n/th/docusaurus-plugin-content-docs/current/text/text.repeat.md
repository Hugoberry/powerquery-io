---
title: Text.Repeat
---

# Text.Repeat


ส่งกลับค่าข้อความที่เรียบเรียงของข้อความป้อนเข้าที่ทำซ้ำตามจำนวนครั้งที่ระบุ


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

ส่งกลับค่าข้อความที่เรียบเรียงของข้อความป้อนเข้า `text` ที่ทำซ้ำ `count` ครั้ง


## Examples

### Example #1
ทำซ้ำข้อความ "a" ห้าครั้ง
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
ทำซ้ำข้อความ "helloworld" สามครั้ง
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
