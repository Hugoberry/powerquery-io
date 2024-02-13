---
title: Expression.Constant
---

# Expression.Constant


Trả về dạng biểu diễn mã nguồn M của một giá trị không đổi.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Remarks

Trả về dạng biểu diễn mã nguồn M của một giá trị không đổi.


## Examples

### Example #1 
Tải dạng biểu diễn mã nguồn M của giá trị số.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Tải dạng biểu diễn mã nguồn M của giá trị ngày.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Tải dạng biểu diễn mã nguồn M của giá trị văn bản.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
