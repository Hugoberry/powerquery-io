---
title: RowExpression.From
---

# RowExpression.From


関数の本文の抽象構文ツリー (AST) を返します。


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

`function`の本体の抽象構文ツリー (AST) を*行式に正規化*して返します:

-   関数は 1 引数ラムダである必要があります。
-   関数パラメーターへのすべての参照は、`RowExpression.Row` と置き換えられます。
-   列へのすべての参照は `RowExpression.Column(columnName)` と置き換えられます。
-   AST は次の種類のノードだけを含むように簡素化されます:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

`function` の本文に対して行式の AST を返せない場合は、エラーが発生します。  
  
この関数は、`ItemExpression.From` と同じです。


## Examples

### Example #1
関数 `each [CustomerID] = "ALFKI"` の本文の AST を返します。
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
