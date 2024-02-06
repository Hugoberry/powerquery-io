---
title: Expression.Constant
---

# Expression.Constant


返回常数值的 M 源代码表示形式。


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Remarks

返回常数值的 M 源代码表示形式。


## Examples

### Example #1 
获取数字值的 M 源代码表示形式。
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
获取日期值的 M 源代码表示形式。
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
获取文本值的 M 源代码表示形式。
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
