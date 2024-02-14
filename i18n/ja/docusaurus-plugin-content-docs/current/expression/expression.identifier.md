---
title: Expression.Identifier
---

# Expression.Identifier


識別子の M ソース コード表現を返します。


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Remarks

識別子 <code>name</code> の M ソース コード表現を返します。


## Examples

### Example #1 
識別子の M ソース コード表現を取得します。
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
空白を含む識別子の M ソース コード表現を取得します。
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
