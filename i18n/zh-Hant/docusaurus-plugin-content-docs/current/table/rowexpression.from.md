---
title: RowExpression.From
---

# RowExpression.From


傳回函數主體的抽象語法樹狀結構 (AST)。


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

傳回已標準化為*資料列運算式*的 `function` 主體的抽象語法樹狀結構 (AST):

-   此函數必須是 1 個引數的 Lambda。
-   所有對該函數參數的參考皆由 `RowExpression.Row` 取代。
-   所有對資料行的參考都會以 `RowExpression.Column(columnName)` 取代。
-   AST 會簡化為只包含下列種類的節點:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

當無法為 `function` 主體傳回資料列運算式的 AST 時，即會引發錯誤。  
  
此函數與 `ItemExpression.From` 完全相同。


## Examples

### Example #1
傳回函數 `each [CustomerID] = "ALFKI"` 主體的 AST。
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
