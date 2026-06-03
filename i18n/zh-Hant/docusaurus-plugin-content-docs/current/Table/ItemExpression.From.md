---
title: ItemExpression.From
---

# ItemExpression.From


傳回函數主體的抽象語法樹狀結構 (AST)。


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

傳回已標準化為 *項目運算式* 的 `function` 主體的抽象語法樹狀結構 (AST):

-   此函數必須是 1 個引數的 Lambda。
-   所有對該函數參數的參考皆由 `ItemExpression.Item` 取代。
-   AST 會簡化為只包含下列種類的節點:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

當無法為 `function` 主體傳回項目運算式的 AST 時，即會引發錯誤。  
  
此函數與 `RowExpression.From` 完全相同。


## Examples

### Example #1
傳回函數 `each _ <> null` 主體的 AST。
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
