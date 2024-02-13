---
title: Expression.Identifier
---

# Expression.Identifier


ส่งกลับการแสดงรหัสแหล่งข้อมูล M ของตัวระบุ


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

ส่งกลับการแสดงรหัสแหล่งข้อมูล M ของตัวระบุ <code>name</code>


## Examples

### Example #1 
รับการแสดงรหัสแหล่งข้อมูล M ของตัวระบุ
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
รับการแสดงรหัสแหล่งข้อมูล M ของตัวระบุที่มีที่ว่าง
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
