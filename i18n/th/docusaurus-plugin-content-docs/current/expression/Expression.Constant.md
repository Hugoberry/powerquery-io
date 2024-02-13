---
title: Expression.Constant
---

# Expression.Constant


ส่งกลับการแสดงรหัสแหล่งข้อมูล M ของค่าคงที่


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Remarks

ส่งกลับการแสดงรหัสแหล่งข้อมูล M ของค่าคงที่


## Examples

### Example #1 
รับการแสดงรหัสแหล่งข้อมูล M ของค่าตัวเลข
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
รับการแสดงรหัสแหล่งข้อมูล M ของค่าวันที่
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
รับการแสดงรหัสแหล่งข้อมูล M ของค่าข้อความ
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
