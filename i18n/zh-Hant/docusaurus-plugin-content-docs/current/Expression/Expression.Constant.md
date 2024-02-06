---
title: Expression.Constant
---

# Expression.Constant


傳回常數值的 M 原始程式碼表示法。


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Remarks

傳回常數值的 M 原始程式碼表示法。


## Examples

### Example #1 
取得數值的 M 原始程式碼表示法。
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
取得日期值的 M 原始程式碼表示法。
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
取得文字值的 M 原始程式碼表示法。
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
