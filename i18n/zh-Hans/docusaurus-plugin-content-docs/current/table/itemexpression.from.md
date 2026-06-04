---
title: ItemExpression.From
---

# ItemExpression.From


返回函数主体的抽象语法树(AST)。


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

返回 `function` 主体的抽象语法树(AST)，规范化为*项表达式*:

-   函数必须为 1 个参数的 lambda。
-   对函数参数的所有引用已替换为 `ItemExpression.Item`。
-   AST 将简化为仅包含以下类型的节点:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

如果无法返回 `function` 的主体的项表达式 AST，则会出现错误。  
  
此函数与 `RowExpression.From` 完全相同。


## Examples

### Example #1
返回函数 `each _ <> null` 的主体的 AST。
```powerquery
ItemExpression.From(each _ <> null)
```

Result: 
```powerquery
[
    Kind = "Binary",
    Operator = "NotEquals",
    Left = ItemExpression.Item,
    Right =
    [
        Kind = "Constant",
        Value = null
    ]
]
```




## Category
Table.Table construction
