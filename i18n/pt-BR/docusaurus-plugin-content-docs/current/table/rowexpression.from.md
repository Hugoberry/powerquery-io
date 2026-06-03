---
title: RowExpression.From
---

# RowExpression.From


Retorna a árvore de sintaxe abstrata (AST) para o corpo de uma função.


## Syntax

```powerquery
RowExpression.From(
    function as function
) as record
```


## Remarks

Retorna a árvore de sintaxe abstrata (AST) para o corpo de `function`, normalizada em uma *expressão de linha*:

-   A função deve ser lambda de 1 argumento.
-   Todas as referências ao parâmetro de função são substituídas por `RowExpression.Row`.
-   Todas as referências a colunas são substituídas por `RowExpression.Column(columnName)`.
-   O AST será simplificado para conter apenas nós de tipos:
    -   `Constant`
    -   `Invocation`
    -   `Unary`
    -   `Binary`
    -   `If`
    -   `FieldAccess`

Um erro será gerado se uma expressão de linha AST não puder ser retornada para o corpo de `function`.  
  
Essa função é idêntica a `ItemExpression.From`.


## Examples

### Example #1
Retorna o AST para o corpo da função `each [CustomerID] = "ALFKI"`.
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
