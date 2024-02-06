---
title: Type.IsNullable
---

# Type.IsNullable


ส่งกลับค่าจริงถ้าประเภทนั้นเป็นประเภทที่สามารถเป็น NULL ได้ มิฉะนั้นจะส่งกลับค่าเท็จ


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

ส่งกลับ <code>true</code> ถ้าประเภทเป็นประเภทที่ <code>nullable</code> มิฉะนั้นจะส่งกลับ <code>false</code>


## Examples

### Example #1 
ดูว่า &lt;code&gt;number&lt;/code&gt; เป็น NULL ได้หรือไม่
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
ดูว่า &lt;code&gt;type nullable number&lt;/code&gt; เป็น NULL ได้หรือไม่
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
