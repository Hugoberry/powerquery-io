---
title: ItemExpression.From
---

# ItemExpression.From


Retorna a árvore de sintaxe abstrata (AST) para o corpo de uma função.


## Syntax

```powerquery
ItemExpression.From(
    function as function
) as record
```


## Remarks

Retorna a árvore de sintaxe abstrata (AST) para o corpo de `function`, normalizado em uma *expressão de item*:

-   A função deve ser lambda de 1 argumento.
-   Todas as referências ao parâmetro de função são substituídas por `ItemExpression.Item`.
-   O AST será simplificado para conter apenas nós de tipos:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Um erro será gerado se uma expressão de item AST não puder ser retornada para o corpo de `function`.  
  
Essa função é idêntica a `RowExpression.From`.


## Examples

### Example #1
Retorna o AST para o corpo da função `each _ <> null`.
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
