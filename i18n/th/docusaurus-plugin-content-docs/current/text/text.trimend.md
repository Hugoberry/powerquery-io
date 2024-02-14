---
title: Text.TrimEnd
---

# Text.TrimEnd


เอาช่องว่างต่อท้ายทั้งหมดออก


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

ส่งกลับผลลัพธ์ของการเอาช่องว่างต่อท้ายทั้งหมดออกจากค่าข้อความ <code>text</code>


## Examples

### Example #1 
เอาช่องว่างต่อท้ายออกจาก &#34;     a b c d    &#34;
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
