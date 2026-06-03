---
title: ItemExpression.From
---

# ItemExpression.From


関数の本文の抽象構文ツリー (AST) を返します。


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

`function`の本体の抽象構文ツリー (AST) を*項目式に正規化*して返します:

-   関数は 1 引数ラムダである必要があります。
-   関数パラメーターへのすべての参照は、`ItemExpression.Item` と置き換えられます。
-   AST は次の種類のノードだけを含むように簡素化されます:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

`function` の本文に対して項目式の AST を返せない場合は、エラーが発生します。  
  
この関数は、`RowExpression.From` と同じです。


## Examples

### Example #1
関数 `each _ <> null` の本文の AST を返します。
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
