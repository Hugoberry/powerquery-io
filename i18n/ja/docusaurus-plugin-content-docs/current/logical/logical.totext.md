---
title: Logical.ToText
---

# Logical.ToText


指定された論理値に基づいて、テキスト "true" または "false" を返します。


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

論理値 `logicalValue` (`true` または `false`) からテキスト値を作成します。`logicalValue` が論理値でない場合は、エラーが発生します。


## Examples

### Example #1
論理 `true` からテキスト値を作成します。
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
