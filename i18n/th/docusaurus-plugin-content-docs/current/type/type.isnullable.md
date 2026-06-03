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

ส่งกลับ `true` ถ้าประเภทเป็นประเภทที่ `nullable` มิฉะนั้นจะส่งกลับ `false`


## Examples

### Example #1
ดูว่า `number` เป็น NULL ได้หรือไม่
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
ดูว่า `type nullable number` เป็น NULL ได้หรือไม่
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
