---
title: RowExpression.From
---

# RowExpression.From


返回函数主体的抽象语法树(AST)。


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

返回 `function` 主体的抽象语法树(AST)，规范化为*行表达式*:

-   函数必须为 1 个参数的 lambda。
-   对函数参数的所有引用已替换为 `RowExpression.Row`。
-   对列的所有引用已替换为 `RowExpression.Column(columnName)`。
-   AST 将简化为仅包含以下类型的节点:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

如果无法返回 `function` 的主体的行表达式 AST，则会出现错误。  
  
此函数与 `ItemExpression.From` 完全相同。


## Examples

### Example #1
返回函数 `each [CustomerID] = "ALFKI"` 主体的 AST。
```powerquery
RowExpression.From(each [CustomerName] = "ALFKI")
```

Result: 
```powerquery
[
    Kind = "Binary",
    Operator = "Equals",
    Left = RowExpression.Column("CustomerName"),
    Right =
    [
        Kind = "Constant",
        Value = "ALFKI"
    ]
]
```




## Category
Table.Table construction
