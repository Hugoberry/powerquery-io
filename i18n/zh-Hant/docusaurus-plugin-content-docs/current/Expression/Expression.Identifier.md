---
title: Expression.Identifier
---

# Expression.Identifier


## Description

傳回識別碼的 M 原始程式碼表示法。


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Details

傳回識別碼 <code>name</code> 的 M 原始程式碼表示法。


## Examples

### Example #1 
取得識別碼的 M 原始程式碼表示法。
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
取得包含空格之識別碼的 M 原始程式碼表示法。
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
