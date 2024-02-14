---
title: Expression.Identifier
---

# Expression.Identifier


Trả về dạng biểu diễn mã nguồn M của mã định danh.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

Trả về dạng biểu diễn mã nguồn M của mã định danh <code>name</code>.


## Examples

### Example #1 
Tải dạng biểu diễn mã nguồn M của mã định danh.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
Tải dạng biểu diễn mã nguồn M của mã định danh có chứa dấu cách.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
