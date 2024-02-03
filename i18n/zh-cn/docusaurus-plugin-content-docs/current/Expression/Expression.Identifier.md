---
title: Expression.Identifier
---

# Expression.Identifier


## Description

返回标识符的 M 源代码表示形式。


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Details

返回标识符 <code>name</code> 的 M 源代码表示形式。


## Examples

### Example #1 
获取标识符的 M 源代码表示形式。
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
获取包含空格的标识符的 M 源代码表示形式。
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
