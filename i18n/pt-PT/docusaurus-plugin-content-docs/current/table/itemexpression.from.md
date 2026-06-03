---
title: ItemExpression.From
---

# ItemExpression.From


Devolve a árvore de sintaxe abstrata (AST) para o corpo de uma função.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Devolve a árvore de sintaxe abstrata (AST) para o corpo de `function`, normalizada numa *expressão de item*:

-   A função tem de ser uma lambda de um argumento.
-   Todas as referências ao parâmetro da função são substituídas por `ItemExpression.Item`.
-   A AST será simplificada para conter apenas nós dos tipos seguintes:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

É gerado um erro se não for possível devolver uma AST de expressão de item para o corpo de `function`.  
  
Esta função é idêntica a `RowExpression.From`.


## Examples

### Example #1
Devolve a AST para o corpo da função `each _ <> null`.
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
