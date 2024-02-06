---
title: Expression.Constant
---

# Expression.Constant


定数値の M ソース コード表現を返します。


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Remarks

定数値の M ソース コード表現を返します。


## Examples

### Example #1 
数値の M ソース コード表現を取得します。
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
日付値の M ソース コード表現を取得します。
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
テキスト値の M ソース コード表現を取得します。
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
