---
title: Text.Insert
---

# Text.Insert


แทรกค่าข้อความหนึ่งลงในอีกค่าในตำแหน่งที่กำหนด


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

ส่งกลับผลลัพธ์ของการแทรกค่าข้อความ <code>newText</code> ลงในค่าข้อความ <code>text</code> ที่ตำแหน่ง <code>offset</code> ตำแหน่งเริ่มต้นที่ตัวเลข 0


## Examples

### Example #1 
แทรก &#34;C&#34; ระหว่าง &#34;B&#34; และ &#34;D&#34; ใน &#34;ABD&#34;
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
